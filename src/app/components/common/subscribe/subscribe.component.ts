import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    subscribeImage: Image[] = [
        {
            img: 'assets/img/subscribe-img1.png'
        }
    ]
    subscribeContent: Content[] = [
        {
            title: 'We Like to Start Your Project With Us',
            paragraphText: 'We are extrapolated to start with you to build your needs to boost your business or career with our training.',
            inputText: 'Enter your email address',
            buttonText: 'Subscribe Now',
            buttonIcon: 'flaticon-tick'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    title : string;
    paragraphText : string;
    inputText : string;
    buttonText : string;
    buttonIcon : string;
}
