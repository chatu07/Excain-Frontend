import { Component, OnInit } from '@angular/core';
import { Traning } from '../../../TranningModel.model';
import { TraningCourse } from '../../../TranningService.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-courses-details-page',
    templateUrl: './courses-details-page.component.html',
    styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit {

    constructor(private TraningCourse:TraningCourse,private activatedRoute:ActivatedRoute) { }
    traning_detials:Traning;
    traning_id:string = this.activatedRoute.snapshot.params['id'];

    ngOnInit(): void {
        //console.log(this.traning_id)
        this.activatedRoute.params
        .subscribe((parmas:Params)=>{
            this.traning_id = parmas['id']
        })
        this.traning_detials = this.TraningCourse.getTraningDetials(this.traning_id);
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Courses Details',
            subTitle: 'Introduction to Quantitative Methods'
        }
    ]

}
class pageTitle {
    title : string;
    subTitle: string;
}
