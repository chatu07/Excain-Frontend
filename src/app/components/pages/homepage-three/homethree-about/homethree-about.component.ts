import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-about',
    templateUrl: './homethree-about.component.html',
    styleUrls: ['./homethree-about.component.scss']
})
export class HomethreeAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImage: Image[] = [
        {
            img: 'assets/img/about/img4.png'
        }
    ]
    aboutContent: Content[] = [
        {
            title: 'Industrial Training + Intelligent Solutions',
            paragraphText1: 'We will provide intelligent APIs to automate your tasks and build custom solutions according to your need.',
            paragraphText2: 'You will learn about training data, and how to use a set of data to discover potentially predictive relationships. As you build the movie recommendation system, you will learn how to train algorithms using training data so you can predict the outcome for future datasets. You will also learn about overtraining and techniques to avoid it such as cross-validation. All of these skills are fundamental to machine learning.',
            paragraphText3: '',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'More About Us',
            defaultBtnLink: 'about-us-4'
        }
    ]
    contentList: List[] = [
        {
            icon: 'flaticon-tick',
            title: 'What is regularization and why it is useful',
        },
        {
            icon: 'flaticon-tick',
            title: 'Perhaps the most popular data science methodologies'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    paragraphText3 : string;
    defaultBtnIcon : string;
    defaultBtnText : string;
    defaultBtnLink : string;
}
class List {
    icon : string;
    title : string;
}
