import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-training",
    templateUrl: "./training.component.html",
    styleUrls: ["./training.component.scss"],
})
export class TrainingComponent implements OnInit {



    @Input() subTitle = "Industrial Training";

    constructor() {}

    ngOnInit(): void {}

    pageTitleArea: pageTitle[] = [
        {
            title: "Service Details",
            subTitle: "Industrial Training",
        },
    ];
    servicesDetailsImage: DetailsImage[] = [
        {
            img: "assets/img/services/services-details1.jpg",
        },
    ];
    servicesDetailsDesc: DetailsDesc[] = [
        {
            subTitle: "Industrial Training",
            title1: "About this Services",
            paragraphText1:
                "Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.",
            paragraphText2:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
    ];
    servicesDetailsDescImportantFacts: ImportantFacts[] = [
        {
            title: "The Field of Data Science",
        },
        {
            title: "The Problem",
        },
        {
            title: "The Solution",
        },
        {
            title: "The Skills",
        },
        {
            title: "Statistics",
        },
        {
            title: "Mathematics",
        },
    ];
    servicesDetailsDescApplication: Application[] = [
        {
            title: "Healthcare",
            icon: "flaticon-factory",
        },
        {
            title: "Automation",
            icon: "flaticon-hospital",
        },
        {
            title: "Agriculture",
            icon: "flaticon-tracking",
        },
    ];
    servicesDetailsDescTechnologiesFeatures: TechnologiesFeatures[] = [
        {
            title: "Tensorflow",
        },
        {
            title: "PyTorch",
        },
        {
            title: "Django",
        },
        {
            title: "Angular",
        },
        {
            title: "React",
        },
        {
            title: "Apache Hadoop",
        },
        {
            title: "Apache Spark",
        },
        {
            title: "Keras",
        },
        {
            title: "MongoDB",
        },
        {
            title: "SQL",
        },
        {
            title: "Spring",
        },
        {
            title: "JSP and Servlets",
        },
    ];

    sidebarServicesList: ServicesList[] = [
        {
            title: "AI & ML Development",
            link: "services-details",
        },
        {
            title: "Data Analytics",
            link: "services-details",
        },
        {
            title: "Data Science",
            link: "services-details",
        },
        {
            title: "Artificial Intelligence",
            link: "services-details",
        },
        {
            title: "Data Visualization",
            link: "services-details",
        },
    ];
    sidebarDownloadFile: DownloadFile[] = [
        {
            title: "PDF Download",
            icon: "bx bxs-file-pdf",
            link: "services-details",
        },
        {
            title: "Services Details.txt",
            icon: "bx bxs-file-txt",
            link: "services-details",
        },
    ];
    sidebarContactInfo: ContactInfo[] = [
        {
            icon: "bx bx-user-pin",
            title: "Phone",
            subTitle: "+2145 354 5413",
        },
        {
            icon: "bx bx-map",
            title: "Location",
            subTitle: "New York, USA",
        },
        {
            icon: "bx bx-envelope",
            title: "Email",
            subTitle: "hello@wilo.com",
        },
    ];
}
class pageTitle {
    title: string;
    subTitle: string;
}
class DetailsImage {
    img: string;
}
class DetailsDesc {
    subTitle: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    paragraphText1: string;
    paragraphText2: string;
    img1: string;
    img2: string;
}
class ImportantFacts {
    title: string;
}
class Application {
    title: string;
    icon: string;
}
class TechnologiesFeatures {
    title: string;
}

class ServicesList {
    title: string;
    link: string;
}
class DownloadFile {
    title: string;
    icon: string;
    link: string;
}
class ContactInfo {
    icon: string;
    title: string;
    subTitle: string;
}
