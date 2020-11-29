import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ServiceDetailService } from "../../../Courcesservices.service";
import { servicesDetialsModel } from "../../../Courcesservices.model";
@Component({
    selector: "app-services-details-page",
    templateUrl: "./services-details-page.component.html",
    styleUrls: ["./services-details-page.component.scss"],
})
export class ServicesDetailsPageComponent implements OnInit {
    service_id: string;
    service_data: servicesDetialsModel;

    constructor(
        private ActivatedRoute: ActivatedRoute,
        private ServiceDetailService: ServiceDetailService,
        private router: Router
    ) {}


    serviceNameID :{id:string,name:string}[]

    ngOnInit(): void {

        this.service_id = this.ActivatedRoute.snapshot.params["id"];
        this.ActivatedRoute.params.subscribe((param: Params) => {
            this.service_id = param["id"];
            this.service_data = this.ServiceDetailService.getSerivceData(
                this.service_id
                );
        });

        this.serviceNameID =  this.ServiceDetailService.getServicesNameID()

    }

    pageTitleArea: pageTitle[] = [
        {
            title: "Service Details",
            subTitle: "AI & ML Development",
        },
    ];
    servicesDetailsImage: DetailsImage[] = [
        {
            img: "assets/img/services/img22.jpg",
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
            title: "Automation",
            icon: "flaticon-factory",
        },
        {
            title: "Healthcare",
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
            subTitle: "+91 8299864862",
        },
        {
            icon: "bx bx-map",
            title: "Location",
            subTitle: "Head Corporate Office: B1/90 Sector - J , Aliganj Lucknow, Uttar Pradesh - 226024",
        },
        {
            icon: "bx bx-envelope",
            title: "Email",
            subTitle: "contact@excain.com",
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
