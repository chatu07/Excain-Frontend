import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-banner',
    templateUrl: './homefour-banner.component.html',
    styleUrls: ['./homefour-banner.component.scss']
})
export class HomefourBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bannerWrapperContent: Content[] = [
        {
            title: 'Excain Builds Solutions Inspired by Your Needs',
            paragraphText: "We have created artificial intelligence tools and APIs to automate all your tasks and provide training and cloud services.",
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'About Us',
            defaultBtnLink: 'about-us',
            optionalBtnIcon: 'flaticon-tick',
            optionalBtnText: 'Get Started',
            optionalBtnLink: 'contact'
        }
    ]

}
class Content {
    title : string;
    paragraphText : string;
    defaultBtnIcon : string;
    defaultBtnText: string;
    defaultBtnLink : string;
    optionalBtnIcon : string;
    optionalBtnText: string;
    optionalBtnLink : string;
}
