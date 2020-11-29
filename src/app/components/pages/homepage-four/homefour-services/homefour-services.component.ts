import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-services',
    templateUrl: './homefour-services.component.html',
    styleUrls: ['./homefour-services.component.scss']
})
export class HomefourServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    setSelectedService(service:string){

    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Services We Can Help You With',
            paragraphText: ''
        }
    ]
    singleServicesBoxItem: ServicesBoxContent[] = [
        {
            icon: 'assets/img/services/icon7.png',
            title: 'Big Data Analysis',
            paragraphText: 'Big Data analytics is the process of collecting, organizing and analyzing large sets of data ...',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services/Big-Data-Analysis'
        },
        {
            icon: 'assets/img/services/icon13.png',
            title: 'Artificial Intelligence',
            paragraphText: 'In computer science, artificial intelligence, sometimes called machine intelligence, is intelligence ...',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services/Artificial-Intelligence'
        },
        {
            icon: 'assets/img/services/icon14.png',
            title: 'Industrial Training',
            paragraphText: 'We carefully handpick the industry best and in demand technologies for our courses so that you stay...',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services/Industrial-Training'
        },
        {
            icon: 'assets/img/services/icon15.png',
            title: 'Cloud Services',
            paragraphText: 'Cloud computing is the on-demand availability of computer system resources, especially data storage...',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services/Cloud-Services'
        },
        {
            icon: 'assets/img/services/icon16.png',
            title: 'Web Development',
            paragraphText: 'Web development is the work involved in developing a website for the Internet or an intranet...',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services/Web-Development'
        },
        {
            icon: 'assets/img/services/icon17.png',
            title: 'Andriod-IOS-Apps',
            paragraphText: 'Paint your app to life in milliseconds with Stateful Hot Reload. Use a rich set of fully-customizable...',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services/Andriod-IOS-Apps'
        },
        {
            icon: 'assets/img/services/icon18.png',
            title: 'IOT',
            paragraphText: 'The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital...',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services/IOT'
        },
        {
            icon: 'assets/img/services/icon8.png',
            title: 'Data Science',
            paragraphText: 'Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems...',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services/Data-Science'
        },
        {
            icon: 'assets/img/services/icon19.png',
            title: 'Machine Learning',
            paragraphText: 'Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross...',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'services/Machine-Learning'
        },
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class ServicesBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    linkText : string;
    linkIcon : string;
    link : string;
}
