import { Injectable } from "@angular/core";
import { servicesDetialsModel, CoursesModel } from "./Courcesservices.model";

@Injectable({
    providedIn: "root",
})
export class ServiceDetailService {
    error: servicesDetialsModel = {
        id: "Not Found",
        subTitle: "",
        title1: "",
        title2: "Important Facts",
        title3: "Application Areas",
        title4: "Technologies That We Use",
        labelImg: "",
        paragraphText1:
            "Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.",
        paragraphText2:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
        img1: "assets/img/projects/img2.jpg",
        img2: "assets/img/services/charts.jpg",
    };

    services: servicesDetialsModel[] = [
        {
            id: "Artificial-Intelligence",
            subTitle: "Artificial Intelligence",
            title1: "About this Services",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            labelImg: "assets/img/services/img24.png",
            paragraphText1:
                "In computer science, artificial intelligence, sometimes called machine intelligence, is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.",
            paragraphText2:
                "The cognitive capabilities of current architectures are very limited, using only a simplified version of what intelligence is really capable of. For instance, the human mind has come up with ways to reason beyond measure and logical explanations to different occurrences in life. What would have been otherwise straightforward, an equivalently difficult problem may be challenging to solve computationally as opposed to using the human mind. This gives rise to two classes of models: structuralist and functionalist. ",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
        {
            id: "Big-Data-Analysis",
            subTitle: "Big Data Analysis",
            title1: "About this Services",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            labelImg: "assets/img/services/img22.jpg",
            paragraphText1:
                "Big Data analytics is the process of collecting, organizing and analyzing large sets of data (called Big Data) to discover patterns and other useful information.Big Data analytics can help organizations to better understand the information contained within the data and will also help identify the data that is most important to the business and future business decisions. Analysts working with Big Data typically want the knowledge that comes from analyzing the data.",
            paragraphText2:
                "To analyze such a large volume of data, Big Data analytics is typically performed using specialized software tools and applications for predictive analytics, data mining, text mining, forecasting and data optimization. Collectively these processes are separate but highly integrated functions of high-performance analytics. Using Big Data tools and software enables an organization to process extremely large volumes of data that a business has collected to determine which data is relevant and can be analyzed to drive better business decisions in the future.",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
        {
            id: "Industrial-Training",
            subTitle: "Industrial Training",
            title1: "About this Services",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            labelImg: "assets/img/services/img25.png",
            paragraphText1:
                "We carefully handpick the industry best and in demand technologies for our courses so that you stay ahead in your career",
            paragraphText2:
                "A good time to catch up with what you always wanted to learn but couldn't…. due to packed semester schedule. Summer Training Program provides you with a program rich in content, detailed in nature to fulfill even the most aspiring minds. A unique blend of detailed conceptual sessions, combined with rigorous hands-on practice sessions, leave a lasting impression on the students' mind. The offering of Summer Training is a well-defined curriculum with crisp delivery.",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
        {
            id: "Cloud-Services",
            subTitle: "Cloud Services",
            title1: "About this Services",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            labelImg: "assets/img/services/img26.jpg",
            paragraphText1:
                "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.",
            paragraphText2:
                "Information and data is stored on physical or virtual servers, which are maintained and controlled by a cloud computing provider, such as Amazon and their AWS product. As a personal or business cloud computing user, you access your stored information on the 'cloud', via an Internet connection.",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
        {
            id: "Web-Development",
            subTitle: "Web Development",
            title1: "About this Services",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            labelImg: "assets/img/services/img27 (2).svg",
            paragraphText1:
                "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web-based internet applications, electronic businesses, and social network services.",
            paragraphText2:
                "The web developer takes the designer’s concepts and creates the code that is used to turn them into a website and bring them to people like you and me. It is important to realize that, although the web developer and the designer may be the same person - there is almost always some overlap between design and front-end development - the roles are different.",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
        {
            id: "Andriod-IOS-Apps",
            subTitle: "Andriod/IOS Apps",
            title1: "About this Services",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            labelImg: "assets/img/services/img28.jfif",
            paragraphText1:
                "Paint your app to life in milliseconds with Stateful Hot Reload. Use a rich set of fully-customizable widgets to build native interfaces in minutes.Quickly ship features with a focus on native end-user experiences. Layered architecture allows for full customization, which results in incredibly fast rendering and expressive and flexible designs.",
            paragraphText2:
                "The working principles of React Native are virtually identical to React except that React Native does not manipulate the DOM via the Virtual DOM. It runs in a background process (which interprets the JavaScript written by the developers) directly on the end-device and communicates with the native platform via a serialisation, asynchronous and batched Bridge.",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
        {
            id: "IOT",
            subTitle: "IOT",
            title1: "About this Services",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            labelImg: "assets/img/services/img29.jpg",
            paragraphText1:
                "The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            paragraphText2:
                "IoT devices are a part of the larger concept of home automation, which can include lighting, heating and air conditioning, media and security systems. Long-term benefits could include energy savings by automatically ensuring lights and electronics are turned off.A smart home or automated home could be based on a platform or hubs that control smart devices and appliances.",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
        {
            id: "Data-Science",
            subTitle: "Data Science",
            title1: "About this Services",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            labelImg: "assets/img/services/img30.jpg",
            paragraphText1:
                "Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data. Data science is related to data mining, deep learning and big data.",
            paragraphText2:
                "Generally speaking, both traditional scientists and data scientists ask questions and/or define a problem, collect and leverage data to come up with answers or solutions, test the solution to see if the problem is solved, and iterate as needed to improve on, or finalize the solution.",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
        {
            id: "Machine-Learning",
            subTitle: "Machine Learning",
            title1: "About this Services",
            title2: "Important Facts",
            title3: "Application Areas",
            title4: "Technologies That We Use",
            labelImg: "assets/img/services/img31.jpg",
            paragraphText1:
                "Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.",
            paragraphText2:
                "Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for themselves.Machine learning also has intimate ties to optimization: many learning problems are formulated as minimization of some loss function on a training set of examples. Loss functions express the discrepancy between the predictions of the model being trained and the actual problem instances (for example, in classification, one wants to assign a label to instances, and models are trained to correctly predict the pre-assigned labels of a set of examples). ",
            img1: "assets/img/projects/img2.jpg",
            img2: "assets/img/services/charts.jpg",
        },
    ];

    getSerivceData(id: string) {
        for (let i = 0; i < this.services.length; i++) {
            if (this.services[i].id == id) {
                return this.services[i];
            }
        }
        return this.error;
    }

    getServicesNameID() {
        let serviceNameID: { id: string; name: string }[] = [];
        let n = this.services.length;
        for (let i = 0; i < n; i++) {
            let id = this.services[i].id;
            let name = this.services[i].id;
            serviceNameID.push({ id, name });
        }
        return serviceNameID;
    }
}

@Injectable({
    providedIn: "root",
})
export class CourceDetialService {
    error: CoursesModel = {
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
    };

    cources: CoursesModel[] = [
        {
            id: "Machine-Learning",
            courseImg: "assets/img/courses/img1.jpg",
            coursePrice: "Free",
            coursePriceClass: "free",
            authorImg: "assets/img/user1.jpg",
            authorName: "Alex Morgan",
            title: "Machine Learning",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "8 Weeks Long",
            studentApply: "Available Now",
        },
        {
            id: "Deep-Learning",
            courseImg: "assets/img/courses/img2.jpg",
            coursePrice: "$49",
            coursePriceClass: "paid",
            authorImg: "assets/img/user2.jpg",
            authorName: "Sarah Taylor",
            title: "Deep Learning",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "7 Weeks Long",
            studentApply: "Available Now",
        },
        {
            id: "Anomaly-Detection",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Anomaly Detection",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Artificial-Intelligence",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Artificial Intelligence",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Data-Scienc",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Big Data",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Data-Scienc",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Data Science",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Python",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Python",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Spring-Boot-with-Micro-Services",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Spring Boot with Micro Services",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Core-Java",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Core Java",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Anomaly-Detection",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Anomaly Detection",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Devops",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Devops",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "BlockChain",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "BlockChain",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Docker-and-Kubernetes",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Docker and Kubernetes",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Cloud-Computing-AWS",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Cloud Computing AWS",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Cloud-Computing-Azure",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Cloud Computing Azure",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "IoT",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "IoT",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Pega",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Pega",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "NoT Found",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Rect-Js",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "C-with-Data-Structure",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "C with Data Structure",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Tensorflow-2.0-Deep-Learning-and-Artificial-Intelligence",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Tensorflow 2.0: Deep Learning and Artificial Intelligence",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            id: "Deep-Learning-Computer-Vision",
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Deep Learning : Computer Vision",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
    ];

    getCources() {
        return this.cources;
    }
    getCourcesData(id: string) {
        for (let i = 0; i < this.cources.length; i++) {
            if (this.cources[i].id == id) {
                return this.cources[i];
            }
        }
        return this.error;
    }
}

export class CourceService {
    cources = [
        {
            courseImg: "assets/img/courses/img1.jpg",
            coursePrice: "Free",
            coursePriceClass: "free",
            authorImg: "assets/img/user1.jpg",
            authorName: "Alex Morgan",
            title: "Introduction to Quantitative Methods",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "8 Weeks Long",
            studentApply: "Available Now",
        },
        {
            courseImg: "assets/img/courses/img2.jpg",
            coursePrice: "$49",
            coursePriceClass: "paid",
            authorImg: "assets/img/user2.jpg",
            authorName: "Sarah Taylor",
            title: "Introduction to Linear Models and Matrix Algebra",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "7 Weeks Long",
            studentApply: "Available Now",
        },
        {
            courseImg: "assets/img/courses/img3.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Data Science: Inference and Modeling",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
        {
            courseImg: "assets/img/courses/img4.jpg",
            coursePrice: "$99",
            coursePriceClass: "paid",
            authorImg: "assets/img/user1.jpg",
            authorName: "Alex Morgan",
            title: "The Data Science Course: Complete Data Science",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "8 Weeks Long",
            studentApply: "Available Now",
        },
        {
            courseImg: "assets/img/courses/img5.jpg",
            coursePrice: "$49",
            coursePriceClass: "paid",
            authorImg: "assets/img/user2.jpg",
            authorName: "Sarah Taylor",
            title: "Java Programming Masterclass for Developers",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "7 Weeks Long",
            studentApply: "Available Now",
        },
        {
            courseImg: "assets/img/courses/img6.jpg",
            coursePrice: "$69",
            coursePriceClass: "paid",
            authorImg: "assets/img/user3.jpg",
            authorName: "David Warner",
            title: "Machine Learning A-Z™: Hands-On Python",
            link: "courses-details",
            paragraphText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            courseDuration: "2 Weeks Long",
            studentApply: "Not Available",
        },
    ];
}
