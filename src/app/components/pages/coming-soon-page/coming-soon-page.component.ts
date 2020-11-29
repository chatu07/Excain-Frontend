import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon-page',
  templateUrl: './coming-soon-page.component.html',
  styleUrls: ['./coming-soon-page.component.scss']
})
export class ComingSoonPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  errorContent: Content[] = [
    {
        img: 'assets/img/coming-soon.svg',
        title: 'Comming Soon',
        paragraphText: 'The page you are looking for is under development. kindly follow us on LinkedIn and keep updated.',
        goBackBtnIcon: 'flaticon-history',
        goBackBtnText: 'Go Back',
        BackToHomeBtnIcon: 'flaticon-earth-day',
        BackToHomeBtnText: 'Homepage'
    }
]

}


class Content {
    img : string;
    title: string;
    paragraphText: string;
    goBackBtnIcon: string;
    goBackBtnText: string;
    BackToHomeBtnIcon: string;
    BackToHomeBtnText: string;
}
