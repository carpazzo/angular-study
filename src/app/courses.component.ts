import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
   selector: 'courses', //like css selection.  //getTitle() use that inse de braces(string interpolation) is you want to use as a function, you can also concatnate using the plus +
   template:`
        
        <h2>{{title}}<h2>
        <ul>
            <li *ngFor="let course of courses">
            {{course}}
            </li>
        </ul>

        <button class="btn btn-primary">Save</button>
    `,
})


export class CoursesComponent{

    title ="List of Courses";
    courses;
    
    constructor(service: CoursesService){
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }
    //getTitle(){ 
       //return this.title;
    //}
}