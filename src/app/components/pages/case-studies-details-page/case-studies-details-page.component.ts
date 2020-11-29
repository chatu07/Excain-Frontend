import { Component, OnInit } from "@angular/core";
import { CaseStudyService } from "../../../CaseStudy.service";
import { CaseStudies } from "../../../CaseStudy.model";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: "app-case-studies-details-page",
    templateUrl: "./case-studies-details-page.component.html",
    styleUrls: ["./case-studies-details-page.component.scss"],
})
export class CaseStudiesDetailsPageComponent implements OnInit {
    constructor(
        private CaseStudyService: CaseStudyService,
        private router: Router,
        private ActiveRoute: ActivatedRoute
    ) {}
    case_sudy_id: string;
    caseStudiesDetailsDesc: CaseStudies;

    ngOnInit(): void {
        this.case_sudy_id = this.ActiveRoute.snapshot.params["id"];
        this.ActiveRoute.params.subscribe((param: Params) => {
            this.case_sudy_id = param["id"];
        });
        this.caseStudiesDetailsDesc = this.CaseStudyService.getCaseStuide(
            this.case_sudy_id
        );
    }

    pageTitleArea: pageTitle[] = [
        {
            title: "Case Studies Details",
            subTitle: "Data Science in Pharmaceutical Industries",
        },
    ];

    caseStudiesDetailsImage: Image[] = [
        {
            img: "assets/img/projects/projects-details1.jpg",
        },
    ];

    caseStudiesDetailsDescImportantFacts: ImportantFacts[] = [
        {
            title: "The Field of Data Science",
        },
        {
            title: "The Problem",
        },
        {
            title: "The Solution",
        },
        {
            title: "The Skills",
        },
        {
            title: "Statistics",
        },
        {
            title: "Mathematics",
        },
    ];
    caseStudiesDetailsInfo: Info[] = [
        {
            icon: "bx bx-user-pin",
            title: "Client",
            subTitle: "EnvyTheme",
        },
        {
            icon: "bx bx-map",
            title: "Location",
            subTitle: "New York, USA",
        },
        {
            icon: "bx bx-purchase-tag",
            title: "Technologies",
            subTitle: "Python, Data Science",
        },
        {
            icon: "bx bx-check",
            title: "Completed",
            subTitle: "28 April 2020",
        },
        {
            icon: "bx bx-globe",
            title: "Website",
            subTitle: "EnvyTheme.com",
        },
    ];
}
class pageTitle {
    title: string;
    subTitle: string;
}
class Image {
    img: string;
}
class DetailsDesc {
    subTitle: string;
    title1: string;
    title2: string;
    title3: string;
    img1: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
}
class ImportantFacts {
    title: string;
}
class Info {
    icon: string;
    title: string;
    subTitle: string;
}
