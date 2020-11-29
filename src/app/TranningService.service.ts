import { Injectable } from "@angular/core";
import { Traning, TraningInfo } from "./TranningModel.model";

@Injectable({
    providedIn: "root",
})
export class TraningCourse {
    error: Traning = {
        id: "NoT Found",
        courseImg: "",
        coursePrice: "",
        coursePriceClass: "",
        authorImg: "",
        authorName: "",
        title: "Not Found",
        link: "",
        paragraphText: "",
        courseDuration: "",
        studentApply: "",
        overview: {
            description: "",
            certification: "",
            purpose: "",
        },
        Curriculum: [
            {
                section: "",
                sectionname: ["", "", ""],
                duration: "string",
            },
            {
                section: " ",
                sectionname: ["", "", ""],
                duration: "",
            },
        ],
        instructor: {
            img: "string",
            name: "string",
            title: "string",
            profile: [""],
        },
    };

    cources: Traning[] = [
        {
            id: "Machine-Learning",
            courseImg: "assets/img/courses/img1.jpg",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "",
            authorName: "",
            title: "Machine Learning",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "8 Weeks Long",
            studentApply: "Available Now",
            overview: {
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                certification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                purpose: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            },
            Curriculum: [
                {
                    section: "Python Introduction",
                    sectionname: ["Python Introduction"],
                    duration: "1 hour",
                },
                {
                    section: "Stepping into the World of Python",
                    sectionname: ["NumPy Introduction", "NumPy Introduction", "NumPy Introduction","NumPy Introduction","NumPy Introduction","NumPy Introduction"],
                    duration: "2.3 hours",
                },
                {
                    section: "Python MySQL",
                    sectionname: ["Python MySQL", "Python MySQL", "Python MySQL"],
                    duration: "1.3 hours",
                },
            ],
            instructor: {
                img: "string",
                name: "Mr. Ashish Mishra",
                title: "Founder and Data Scients at Excain LLP",
                profile: ["","","","https://www.linkedin.com/in/ashish-misra-65b75b5/"],
            },
        },
        {
            id: "Deep-Learning",
            courseImg: "assets/img/courses/img2.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "",
            authorName: "",
            title: "Deep Learning",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "7 Weeks Long",
            studentApply: "Available Now",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Anomaly-Detection",
            courseImg: "assets/img/courses/img3.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "",
            authorName: "",
            title: "Anomaly Detection",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Artificial-Intelligence",
            courseImg: "assets/img/courses/img4.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "",
            authorName: "",
            title: "Artificial Intelligence",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Big-Data",
            courseImg: "assets/img/courses/img5.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "",
            authorName: "",
            title: "Big Data",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Data-Science",
            courseImg: "assets/img/courses/img6.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "assets/img/user6.jpg",
            authorName: " ",
            title: "Data Science",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Python",
            courseImg: "assets/img/courses/img7.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Python",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Spring-Boot-with-Micro-Services",
            courseImg: "assets/img/courses/img8.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: " ",
            authorName: " ",
            title: "Spring Boot with Micro Services",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Core-Java",
            courseImg: "assets/img/courses/img9.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Core Java",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "NLP",
            courseImg: "assets/img/courses/img10.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "NLP",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Devops",
            courseImg: "assets/img/courses/img11.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Devops",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "BlockChain",
            courseImg: "assets/img/courses/img12.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "BlockChain",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Docker-and-Kubernetes",
            courseImg: "assets/img/courses/img13.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Docker and Kubernetes",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Cloud-Computing-AWS",
            courseImg: "assets/img/courses/img14.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Cloud Computing AWS",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Cloud-Computing-Azure",
            courseImg: "assets/img/courses/img15.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Cloud Computing Azure",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "IoT",
            courseImg: "assets/img/courses/img16.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "IoT",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Pega",
            courseImg: "assets/img/courses/img17.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Pega",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Rect-Js",
            courseImg: "assets/img/courses/img18.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Rect-Js",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "C-with-Data-Structure",
            courseImg: "assets/img/courses/img19.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "C with Data Structure",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Tensorflow-2.0-Deep-Learning-and-Artificial-Intelligence",
            courseImg: "assets/img/courses/img20.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Tensorflow 2.0: Deep Learning and Artificial Intelligence",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
        {
            id: "Deep-Learning-Computer-Vision",
            courseImg: "assets/img/courses/img21.png",
            coursePrice: "12,000",
            coursePriceClass: "paid",
            authorImg: "  ",
            authorName: " ",
            title: "Deep Learning : Computer Vision",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
            overview: {
                description: "",
                certification: "",
                purpose: "",
            },
            Curriculum: [
                {
                    section: "",
                    sectionname: ["", "", ""],
                    duration: "string",
                },
                {
                    section: " ",
                    sectionname: ["", "", ""],
                    duration: "",
                },
            ],
            instructor: {
                img: "string",
                name: "string",
                title: "string",
                profile: [""],
            },
        },
    ];

    getAllTranings() {
        return this.cources;
    }

    getTraningsName() {
        let traningname: TraningInfo[] = [];
        for (let i = 0; i < this.cources.length; i++) {
            let id = this.cources[i].id;
            let courseImg = this.cources[i].courseImg;
            let coursePrice = this.cources[i].coursePrice;
            let coursePriceClass = this.cources[i].coursePriceClass;
            let authorImg = this.cources[i].authorImg;
            let authorName = this.cources[i].authorName;
            let title = this.cources[i].title;
            let link = "/courses/"+this.cources[i].id;
            let paragraphText = this.cources[i].paragraphText;
            let courseDuration = this.cources[i].courseDuration;
            let studentApply = this.cources[i].studentApply;

            traningname.push({
                id,
                courseImg,
                coursePrice,
                coursePriceClass,
                authorImg,
                authorName,
                title,
                link,
                paragraphText,
                courseDuration,
                studentApply,
            });


        }
        return traningname;
    }

    getTraningDetials(id:string){
        for(let i = 0;i<this.cources.length;i++){
            if(id==this.cources[i].id){
                return this.cources[i]
            }
        }
        return this.error
    }
}
