import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aboutpage-about',
    templateUrl: './aboutpage-about.component.html',
    styleUrls: ['./aboutpage-about.component.scss']
})
export class AboutpageAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImage: Image[] = [
        {
            img: 'assets/img/about/img1.png'
        }
    ]
    aboutContent: Content[] = [
        {
            subTitle: 'About Us',
            title: 'Bringing smart solutions that you need',
            paragraphText1: 'Our team has a collective experience of ',
            paragraphText2: ''
        }
    ]
    featuresList: List[] = [
        {
            icon: "assets/img/funfacts/icon6.png",
            title: '12+ Years',
            subTitle: 'Exp. Developer'
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
    aboutText: Text[] = [
        {
            title: 'Our History',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Activate Listening',
            featuresList2: 'Brilliant minds',
            featuresList3: 'Better. Best. Wow!',
            featuresList4: 'Branding it better!',
            icon: 'flaticon-tick'
        },
        {
            title: 'Our Mission',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Creating. Results.',
            featuresList2: 'Expect more',
            featuresList3: 'Good thinking',
            featuresList4: 'In real we trust',
            icon: 'flaticon-tick'
        },
        {
            title: 'Who we are',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Stay real. Always.',
            featuresList2: 'We have you covered',
            featuresList3: 'We turn heads',
            featuresList4: 'Your brand, promoted',
            icon: 'flaticon-tick'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
}
class List {
    icon : string;
    title : string;
    subTitle : string;
}
class Text {
    title : string;
    paragraphText : string;
    featuresList1 : string;
    featuresList2 : string;
    featuresList3 : string;
    featuresList4 : string;
    icon : string;
}
