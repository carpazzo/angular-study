import { CoursesService } from './courses.service';
import {Component} from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';

@Component({
   selector: 'courses', //like css selection.  //getTitle() use that inse de braces(string interpolation) is you want to use as a function, you can also concatnate using the plus +
   template:`
        
        <h2>{{title}}<h2>
        <ul>
            <li *ngFor="let course of courses">
            {{course}}
            </li>
        </ul>
        <p>the class active is added to the button dynamicaly based in some condition </p> 
        <button class="btn btn-primary" [class.active]="isActive">Save</button>

        <p>the stylebinding also can be change with a condition </p> 
        <button [style.backgroundColor]="isActive ?'red': 'white'">Test</button>

        <p>For attribut biding use attr.name</p>

        <p>event biding, use stop propagation to avoid event bubling</p>
        <button (click)="onTest($event)">Test</button>

        <div class="circle" (click)="onDivClicked()">
            <button (click)="onTest($event)">Test</button>
        </div>

        <input (keyup.enter)="onKeyUp()"/>

        <p>working with user input get the variable under type your test email</p>
        
        <input #email (keyup.enter)="onKeyUp(email.value)"/>

        <p>new aproach for property biding old way..</p>

        <input [value]="newemail" (keyup.enter)="newAproach()"/>

        <p>2 ways biding syntax</p>
        <input [(ngModel)]="newemail" (keyup.enter)="newAproach()"/>


        
    `,
})


export class CoursesComponent{

    title ="List of Courses";
    courses;
    isActive = false;
    newemail = "me@email.com";
    
    constructor(service: CoursesService){
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }
    onTest($event){
        $event.stopPropagation();
        console.log("Test button clicked",$event);
    }
    onDivClicked(){
        console.log("Div was clicked");
    }
    onKeyUp(email){
        console.log(email);
    }

    newAproach(){
        console.log(this.newemail);
    }
    //getTitle(){ 
       //return this.title;
    //}
}