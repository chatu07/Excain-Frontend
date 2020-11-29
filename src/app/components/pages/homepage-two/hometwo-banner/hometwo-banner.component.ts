import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bannerContent: Content[] = [
        {
            title: 'Excain Builds Solutions Inspired by Your Needs',
            paragraphText: 'We create artificial intelligence tools and APIs to automate all your tasks and provide training and cloud services.',
            defaultBtnIcon: 'flaticon-structure',
            defaultBtnText: 'About Us',
            defaultBtnLink: 'about-us',
            videoBtnIcon: 'flaticon-google-play',
            videoBtnText: 'Watch Video',
            videoBtnLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o',
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
    videoBtnIcon : string;
    videoBtnText: string;
    videoBtnLink : string;
    optionalBtnIcon: string;
    optionalBtnText: string;
    optionalBtnLink: string;
}
