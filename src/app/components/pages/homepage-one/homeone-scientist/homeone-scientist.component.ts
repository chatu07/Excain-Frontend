import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-scientist',
    templateUrl: './homeone-scientist.component.html',
    styleUrls: ['./homeone-scientist.component.scss']
})
export class HomeoneScientistComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "",
            title: 'Team Members',
            paragraphText: ''
        }
    ]
    singleScientistBox: scientistBoxContent[] = [
        {
            img: 'assets/img/scientist/img4.png',
            title: 'Ashish Mishra',
            designation: 'CEO, Data Scientist and Trainer',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        },
        {
            img: 'assets/img/scientist/img4.png',
            title: 'Sourab Mishra',
            designation: 'Full Stack Developer',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        },
        {
            img: 'assets/img/scientist/img4.png',
            title: 'Chitransh Kulshrestha.',
            designation: 'Full Stack Developer',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        },
        {
            img: 'assets/img/scientist/img4.png',
            title: 'Piyush Juyal',
            designation: 'Machine Learning Engineer',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class scientistBoxContent {
    img: string;
    title: string;
    designation: string;
    facebookLink: string;
    facebookIcon: string;
    twitterLink: string;
    twitterIcon: string;
    instagramLink: string;
    instagramIcon: string;
    linkedinLink: string;
    linkedinIcon: string;
}
