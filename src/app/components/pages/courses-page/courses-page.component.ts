import { Component, OnInit } from '@angular/core';
import { TraningInfo } from '../../../TranningModel.model';
import { TraningCourse } from '../../../TranningService.service';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

    constructor(private traningservice : TraningCourse) { }

    tranings:TraningInfo[]

    ngOnInit(): void {
        this.tranings = this.traningservice.getAllTranings();
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Courses'
        }
    ]

}
class pageTitle {
    title : string;
}
