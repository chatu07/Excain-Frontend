import { Injectable } from "@angular/core";
import { CaseStudies, CaseStudiesName } from "./CaseStudy.model";

@Injectable({
    providedIn: "root",
})
export class CaseStudyService {
    error: CaseStudies = {
        id: "Not-Found",
        icon: "",
        thubnail: "",
        title: "Not-Found",
        subTitle: "",
        introduction: "",
        img1: "",
        img2: "",
        factsTitle: "",
        facts: [],
        paragraph1: "",
        paragraph2: "",
        result: "",
        resultTitle: "",
        client: "",
        Location: "",
        technologies: "",
        Date_of_start: "",
        Website: "",
    };
    all_case_study: CaseStudies[] = [
        {
            id: "Cx-19",
            icon: "bx bx-plus",
            thubnail: "assets/img/projects/img14.jpeg",
            title: "CX-19 (covid-19)",
            subTitle: "Machine Learning, Deep Learning",
            introduction:
                "Covid-19, which is a global pandemic, announced y World Health Organization(WHO) on [1] 12/03/20. On [2] 31 December 2019, Pneumonia of unknown cause detected in Wuhan, China, and reported to the WHO Country Office in China. Finally, on 11 February 2020, WHO announced a name for the new type of coronavirus disease known as COVID-19. Coronavirus is a common virus that causes an infection in your nose, sinuses, or upper throat. Most of the coronaviruses are not considered to be a dangerous virus.COVID-19 is a disease which is caused by SARS-CoV-2 that can trigger respiratory tract infection. It is a part of the anatomy of the respiratory system involved in the process of respiration. Coronavirus is seven types of viruses, which include SARS-CoV-2 is one of seven kinds of coronavirus, including that, can cause severe diseases like the Middle East respiratory syndrome SARS. The other coronaviruses affect us the most throughout the year but aren’t a critical threat to people.",
            img1: "assets/img/projects/img17.jpeg",
            img2: "assets/img/projects/img14.jpeg",
            facts: ["Login Section", "Admin Section", "Dashboard","Patient Enrollment","Patient’s list","Patient’s profile"],
            factsTitle: "Sections Of CX-19",
            paragraph1:
                "This module is the core part of this system; it handles the X-ray classification and instance segmentation. Our policy is a 3 phase analysis system, to increase the robustness of this system, we have added a chest X-ray recognition system. Its job is to recognize if the image passed is that of a chest X-ray or not. After this evaluation, we move on to the classification module, which handles the covid-19 classification. We stratified the data to get the best results, so this module is trained on 297 images of covid-19 positive chest x-rays and 300 images of healthy chest Xrays.",
            paragraph2:
                "After getting a positive outcome from the second phase, we analyze the image for the third phase, which is responsible for instance segmentation. In the third phase, we create a mask on the image to highlight mucus plug blockage, which increases the overall credibility of the analysis. We have recieved some realtime images from King George Medical college and images were annotated by the doctors. For tuberculosis we have another option which sends the image for tuberculosis classification.",
            resultTitle: "",
            result:
                "This intelligent system gives a total solution for a suitable track of COVID-19 and Tuberculosis. Classifiers have high accuracy, which can provide accurate results up to 99 percent. The feature of masking works as a highlighter for illness in these diseases. This system is cloud-based; therefore, this can be implemented by any medical testing organization or hospital. It is effortless to use, and a complete Graphical User Interface is given for all of the requirements. Finally, we can say that this smart system can be used efficiently and may reduce human efforts.",
            client: "KGMU",
            Location: "Lucknow",
            technologies: "Django,Deep Learning",
            Date_of_start: "28 April 2020",
            Website: "www.excain.com",
        },
        {
            id: "Agriculture-Automation",
            icon: "bx bx-plus",
            thubnail: "assets/img/projects/img9.png",
            title: "Agriculture Automation",
            subTitle: "IoT, Artificial Intelligence",
            introduction:
                "Artificial Intelligence & Internet of Things (IoT) technology has transformed almost every industry sector, including but not limited to energy, healthcare, transportation, manufacturing, retail, and agriculture. This evolution has opened up an era of innovation and economic growth that is surpassed by none, in recent times. Business reports from Cisco estimate that there will be 50 billion devices connected to the Internet by 2021, and that $19 trillion in IoT value is at stake over the next decade and every business or process on the planet is going to use AI.",
            img1: "assets/img/projects/img9.png",
            img2: "assets/img/projects/img16.png",
            facts: [
                "Crop Selection",
                "Land Preparation",
                "Seed Selection",
                "Seed Sowing",
                "Irrigation",
                "Crop Growth",
                "Harvesting",
            ],
            factsTitle: "Offering in various steps involved in agriculture ",
            paragraph1:
                "The farmers can monitor the field conditions from anywhere. They can also select between manual and automated options for taking necessary actions based on this data. For example, if the soil moisture level decreases, the farmer can deploy sensors to start the irrigation. Smart farming is highly efficient when compared with the conventional approach.",
            paragraph2:
                "IoT solutions are focused on helping farmers close the supply demand gap, by ensuring high yields, profitability, and protection of the environment. The approach of using IoT technology to ensure optimum application of resources to achieve high crop yields and reduce operational costs is called precision agriculture. IoT in agriculture technologies comprise specialized equipment, wireless connectivity, software and IT services.",
            resultTitle: "Planning",
            result:
                "The farming and agricultural industry relies on innovative ideas and technological advancements to help increase yields and better allocate resources. The late 19th century and the 21th century brought a number of mechanical innovations, like tractors and harvesters. Today, a driving force behind increased agricultural production at a lower cost is the Internet of Things (IoT) & Artificial Intelligence (AI), which leaves the door wide open for engineers looking to bring a smart farming solution or IoT agricultural sensor to market.",
            client: "KGMU",
            Location: "Lucknow",
            technologies: "Django,Deep Learning",
            Date_of_start: "28 April 2020",
            Website: "www.excain.com",
        },
        {
            id: "Optical-Character-Reader",
            icon: "bx bx-plus",
            thubnail: "assets/img/projects/img15.png",
            title: "Optical Character Reader(OCR)",
            subTitle: "Deep Learning",
            introduction:
                "Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.",
            img1: "assets/img/projects/img15.png",
            img2: "assets/img/projects/img13.jpg",
            factsTitle: "",
            facts: ["fast", "Good", "Eassy"],
            paragraph1:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
            resultTitle: "Facts",
            paragraph2:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.",
            result:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori.",
            client: "KGMU",
            Location: "Lucknow",
            technologies: "Django,Deep Learning",
            Date_of_start: "28 April 2020",
            Website: "www.excain.com",
        },
        {
            id: "Arail-Drone-Detection",
            icon: "bx bx-plus",
            thubnail: "assets/img/projects/img12.jpeg",
            title: "Arial Drone Survey",
            subTitle: "IOT, Machine Learning",
            introduction:
                "Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.",
            img1: "assets/img/projects/img13.jpg",
            img2: "assets/img/projects/img13.jpg",
            facts: ["fast", "Good", "Eassy"],
            factsTitle: "",
            paragraph1:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
            paragraph2:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.",
            resultTitle: "",
            result:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori.",
            client: "KGMU",
            Location: "Lucknow",
            technologies: "Django,Deep Learning",
            Date_of_start: "28 April 2020",
            Website: "www.excain.com",
        },
        {
            id: "The-Medical-App",
            icon: "bx bx-plus",
            thubnail: "assets/img/projects/img11.jpg",
            title: "The Medical App",
            subTitle: "Smart System",
            introduction:
                "Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.",
            img1: "assets/img/projects/img13.jpg",
            img2: "assets/img/projects/img13.jpg",
            facts: ["fast", "Good", "Eassy"],
            factsTitle: "",
            paragraph1:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
            paragraph2:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.",
            resultTitle: "",
            result:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori.",
            client: "KGMU",
            Location: "Lucknow",
            technologies: "Django,Deep Learning",
            Date_of_start: "28 April 2020",
            Website: "www.excain.com",
        },

        {
            id: "Home-Automation",
            icon: "bx bx-plus",
            thubnail: "assets/img/projects/img13.jpg",
            title: "Home Automation",
            subTitle: "Data Science, IoT",
            introduction:
                "Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.",
            img1: "assets/img/projects/img13.jpg",
            img2: "assets/img/projects/img13.jpg",
            facts: ["fast", "Good", "Eassy"],
            factsTitle: "",
            paragraph1:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
            paragraph2:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.",
            resultTitle: "",
            result:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori.",
            client: "KGMU",
            Location: "Lucknow",
            technologies: "Django,Deep Learning",
            Date_of_start: "28 April 2020",
            Website: "www.excain.com",
        },

    ];

    getAllCaseStudies() {
        return this.all_case_study;
    }

    getCaseStuide(id: string) {
        for (let i = 0; i < this.all_case_study.length; i++) {
            if (id == this.all_case_study[i].id) return this.all_case_study[i];
        }
        return this.error;
    }

    getCaseStudiesName() {
        let case_studies_name: CaseStudiesName[] = [];
        for (let i = 0; i < this.all_case_study.length; i++) {
            let id = this.all_case_study[i].id;
            let icon = this.all_case_study[i].icon;
            let title = this.all_case_study[i].title;
            let subTitle = this.all_case_study[i].subTitle;
            let thumbnail = this.all_case_study[i].thubnail;
            case_studies_name.push({ id, icon, thumbnail, title, subTitle });
        }
        return case_studies_name;
    }
}
