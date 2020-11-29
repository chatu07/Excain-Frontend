import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-why-choose-us',
    templateUrl: './homefour-why-choose-us.component.html',
    styleUrls: ['./homefour-why-choose-us.component.scss']
})
export class HomefourWhyChooseUsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    partnerItem: Item[] = [
        {
            img: "assets/img/partner/mmm.png"
        },
        {
            img: "assets/img/partner/kgmu.png"
        },
        {
            img: "assets/img/partner/microsoft.png"
        },
        {
            img: "assets/img/partner/google.png"
        },
    ]

}
class Item {
    img : string;
}


