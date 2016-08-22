import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.components'

@Component({
    selector: 'my-app',
    template: '<h1>Hello ng2</h1><courses></courses>',
    directives: [CoursesComponent],
})
export class AppComponent { }
