import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './components/home/home';

@Component({
	selector: 'my-app',
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', redirectTo: ['/Home'] },
	{ path: '/home', component: HomeComponent, name: 'Home' }
])
export class AppComponent {
	constructor() {
	}
}