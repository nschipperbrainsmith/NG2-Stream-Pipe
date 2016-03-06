import {describe, it, expect, beforeEach, afterEach, inject, injectAsync} from 'angular2/testing';
import {WrappedValue, ChangeDetectorRef} from 'angular2/core';
import {EventEmitter} from 'angular2/src/facade/async';
import {StreamPipe} from '../src/stream';
import {AsyncTestCompleter} from "angular2/testing_internal";
import "rxjs/Rx";

class SpyDetercotRef extends ChangeDetectorRef {
	markForCheck():void {}
	detach():void {}
	detectChanges():void {}
	checkNoChanges():void {}
	reattach():void {}
}

describe("StreamPipe", () => {
	var emitter;
	var pipe;
	var ref;

	beforeEach(() => {
		emitter = new EventEmitter();
		ref = new SpyDetercotRef();
		pipe = new StreamPipe(ref);

		spyOn(ref, 'markForCheck');
	});

	describe("transform", () => {
		it("should return an empty array when subscribing to an observable", () => {
			expect(pipe.transform(emitter).length).toBe(0);
		});

		it("should add a value to the array once an event is emitted", (done) => {
			pipe.transform(emitter);
			emitter.subscribe((val) => {
				expect(ref.markForCheck).toHaveBeenCalled();
				let value = pipe.transform(emitter).wrapped;
				expect(value.length).toBe(1);
				expect(value[0]).toBe(10);
				done();
			});
			emitter.emit(10);
		});

		it("should add a value to the array once an event is emitted longer pause", (done) => {
			pipe.transform(emitter);
			emitter.subscribe((val) => {
				expect(ref.markForCheck).toHaveBeenCalled();
				let value = pipe.transform(emitter).wrapped;
				expect(value.length).toBe(1);
				expect(value[0]).toBe(10);
				done();
			});
			setTimeout(() => {
				emitter.emit(10);
			}, 10000);
		}, 15000);
	});
});
