export class Traning{
    id:string;
    courseImg : string;
    coursePrice : string;
    coursePriceClass : string;
    authorImg : string;
    authorName : string;
    title : string;
    link : string;
    paragraphText : string;
    courseDuration : string;
    studentApply : string;
    overview:Overview;
    Curriculum:Curriculum[];
    instructor:instructor;
}


export class Overview{
    description:string;
    certification:string;
    purpose:string;
}

export class Curriculum{
    section:string;
    sectionname:string[];
    duration:string;
}

export class instructor{
    img:string;
    name:string;
    title:string;
    profile :string[];
}

export class TraningInfo{
    id:string;
    courseImg : string;
    coursePrice : string;
    coursePriceClass : string;
    authorImg : string;
    authorName : string;
    title : string;
    link : string;
    paragraphText : string;
    courseDuration : string;
    studentApply : string;
}
