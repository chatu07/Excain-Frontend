import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-featured-services',
    templateUrl: './homefour-featured-services.component.html',
    styleUrls: ['./homefour-featured-services.component.scss']
})
export class HomefourFeaturedServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'How We Take Your Business From Good To Great',
            paragraphText: ''
        }
    ]
    singleFeaturedServicesBox: featuredServicesContent[] = [
        {
            icon: 'flaticon-analysis',
            title: 'Analyze Your Needs',
            paragraphText: 'Our team analyzes every detail of your problem statements and finds all your technical needs. We can do this because of our experience and various factors.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'services-details'
        },
        {
            icon: 'flaticon-structure',
            title: 'Develop A Customized Plan',
            paragraphText: 'We built highly scalable, secure and customized solutions by our team according to our client needs by our planning.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'services-details'
        },
        {
            icon: 'flaticon-idea',
            title: 'Implement Your Solution',
            paragraphText: 'Developers with over 10+ years of experience in the industry implement solutions with great enterprise edition tools and technologies. ',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'services-details'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class featuredServicesContent {
    icon : string;
    title : string;
    paragraphText : string;
    linkIcon : string;
    linkText : string;
    link : string;
}
