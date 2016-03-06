import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {StreamPipe} from "../../pipe/stream";
import {Observable} from "rxjs/Observable";

@Component({
	selector: 'home-component',
	template: require('./home.html'),
	styles: [require('./home.scss')],
	providers: [Title],
	pipes: [StreamPipe]
})
export class HomeComponent {
	observable: Observable<number>;

	constructor(public title: Title) {
		this.title.setTitle("Home page");

		this.observable = new Observable(observable => {
			var value = 0;
			var timeInterval = setInterval(() => {
				value++;
				observable.next(value);
			}, 1000);

			return () => clearInterval(timeInterval);
		});
	}
}