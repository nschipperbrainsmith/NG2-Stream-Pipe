[![Build Status](https://travis-ci.org/schippie/NG2-Stream-Pipe.svg?branch=master)](https://travis-ci.org/schippie/NG2-Stream-Pipe)

# NG2-Stream-Pipe
A stream pipe that can be used within angular2 for the ngFor directive. 
This allows you to simply push data into the view using the Observable.next() function. Without having the async pipe require it to be an array of values.
This behaves similarly to the async pipe. The biggest difference is that in the stream pipe allows you to push regular objects / classes etc. through it.
Which will be displayed within the view as the pipe keeps the list of latestValues (an array containing all the objects etc. that have been pushed by the observable).
An important note to make here is that if you push an array to the stream pipe it will concat the array into the existing array. 

## Example:

```typescript
@Component({
	selector: 'my-component',
	template: `
	    <div *ngFor="#value of observable | stream">{{value}}</div>
	`,
	pipes: [StreamPipe]
})
export class MyComponent {
	observable: Observable<number>;

	constructor() {
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
```
