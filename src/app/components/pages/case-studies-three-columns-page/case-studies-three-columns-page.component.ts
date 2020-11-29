import { Component, OnInit } from '@angular/core';
import { CaseStudiesName } from '../../../CaseStudy.model';
import { CaseStudyService } from '../../../CaseStudy.service';

@Component({
    selector: 'app-case-studies-three-columns-page',
    templateUrl: './case-studies-three-columns-page.component.html',
    styleUrls: ['./case-studies-three-columns-page.component.scss']
})
export class CaseStudiesThreeColumnsPageComponent implements OnInit {

    case_studies:CaseStudiesName[]  = []
    constructor(private CaseStudyService:CaseStudyService) { }



    ngOnInit(): void {
        this.case_studies = this.CaseStudyService.getCaseStudiesName()
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Case Studies'
        }
    ]


}
class pageTitle {
    title : string;
}

