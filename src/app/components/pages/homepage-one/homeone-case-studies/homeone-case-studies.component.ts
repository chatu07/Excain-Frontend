import { Component, OnInit } from '@angular/core';
import { CaseStudyService } from "../../../../CaseStudy.service";
import { CaseStudies } from "../../../../CaseStudy.model";

@Component({
    selector: 'app-homeone-case-studies',
    templateUrl: './homeone-case-studies.component.html',
    styleUrls: ['./homeone-case-studies.component.scss']
})
export class HomeoneCaseStudiesComponent implements OnInit {

    constructor(private CaseStudyService: CaseStudyService,) { }

    ngOnInit(): void {
    }
    singleCaseStudyItem: CaseStudies[] = this.CaseStudyService.getAllCaseStudies();//.slice(0, 4);

}
class singleCaseStudyItemContent {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    link : string;
    linkText : string;
    linkIcon : string;
    img : string;
}
