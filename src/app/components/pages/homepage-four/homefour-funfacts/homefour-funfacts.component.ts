import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-funfacts',
    templateUrl: './homefour-funfacts.component.html',
    styleUrls: ['./homefour-funfacts.component.scss']
})
export class HomefourFunfactsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFunfactsItem: Funfacts[] = [
        {
            icon: "assets/img/funfacts/icon6.png",
            title: '12+ Years',
            subTitle: 'Experienced Developer'
        },
        {
            icon: "assets/img/funfacts/icon7.png",
            title: '10,000+',
            subTitle: 'Learners'
        },
        {
            icon: "assets/img/funfacts/icon3.png",
            title: '100%',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: "assets/img/funfacts/icon4.png",
            title: '10+',
            subTitle: 'Specialized Course'
        }
    ]

}
class Funfacts {
    icon : string;
    title : string;
    subTitle : string;
}
