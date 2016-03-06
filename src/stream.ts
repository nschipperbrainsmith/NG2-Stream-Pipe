import {Pipe, ChangeDetectorRef, OnDestroy, PipeTransform, WrappedValue} from 'angular2/core';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

/**
 * The `stream` pipe subscribes to an Observable and adds the latest value automatically to its array. Or if an array is supplied by the observable (from the next() function)
 * it will concat the value into the latestValue array.
 * This allows you to subscribe to an Observable that keeps emitting new values. Without having to put the logic of merging that result into your Component code.
 *
 * Example:
	Code within a service / component

	this.observable = new Observable(observable => {
		var value = 0;
		var timeInterval = setInterval(() => {
			value++;
			observable.next(value);
		}, 250);

		return () => clearInterval(timeInterval);
	});

    HTML template:

    <div *ngFor="#value in observable | stream"> {{value}} </div>

 * The above small example will keep adding new integer values in divs in the view as long as the observable keeps emitting them.
 */
@Pipe({name: 'stream', pure: false})
export class StreamPipe implements PipeTransform, OnDestroy {
	private subscription: Subscription;
	private observable: Observable<any>;
	private latestValue: Array<any> = [];
	private changed: boolean = false;

	constructor(private ref: ChangeDetectorRef) {}

	transform(obj: Observable<any>, args?: any[]): any {
		if(this.subscription == null) {
			if(obj != null) this.subscribe(obj);
			else return this.latestValue;
		}

		if(obj !== this.observable) {
			this.ngOnDestroy();
			return this.transform(obj);
		}

		if(!this.changed) {
			return this.latestValue;
		}
		this.changed = false;
		return WrappedValue.wrap(this.latestValue);
	}

	subscribe(observable: Observable<any>) {
		this.observable = observable;
		this.subscription = this.observable.subscribe((value: Object | Array<any>) => {
			if(Array.isArray(value)) {
				this.latestValue = this.latestValue.concat(value);
				this.changed = true;
				this.ref.markForCheck();
				return;
			}
			this.latestValue.push(value);
			this.changed = true;
			this.ref.markForCheck();
		});
	}

	ngOnDestroy(): void {
		if(this.subscription != null) this.subscription.unsubscribe();
		this.subscription = null;
		this.ref = null;
		this.latestValue = null;
		this.changed = null;
	}
}