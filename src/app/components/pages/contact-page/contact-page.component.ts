import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Contact Us'
        }
    ]
    contactInfoBox1: InfoBox1[] = [
        {
            icon: 'bx bx-map',
            title: 'Head Corporate Office',
            location: 'Head Corporate Office: B1/90 Sector - J , Aliganj Lucknow, Uttar Pradesh - 226024'
        }
    ]
    contactInfoBox2: InfoBox2[] = [
        {
            icon: 'bx bx-phone-call',
            title: 'Contact',
            number: '+91 8299864862',
            email: 'contact@excain.com'
        }
    ]
    contactInfoBox3: InfoBox3[] = [
        {
            icon: 'bx bx-time-five',
            title: 'Hours of Operation',
            text1: 'Monday - Friday: 09:00 - 18:00',
            text2: 'Sunday & Saturday: 10:30 - 12:00'
        }
    ]

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Get In Touch",
            title: 'Ready to Get Started?',
            paragraphText: 'Your email address will not be published. Required fields are marked *'
        }
    ]
    contactImage: Image[] = [
        {
            img: 'assets/img/contact.png'
        }
    ]

}
class pageTitle {
    title : string;
}
class InfoBox1 {
    icon : string;
    title : string;
    location : string;
}
class InfoBox2 {
    icon : string;
    title : string;
    number : string;
    email : string;
}
class InfoBox3 {
    icon : string;
    title : string;
    text1 : string;
    text2 : string;
}

class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class Image {
    img : string;
}
