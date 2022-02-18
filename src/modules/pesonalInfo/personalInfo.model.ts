export class PersonalInfo{
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public gender: Int8Array,
        public birthday: Date,
        public email: string,
        public linkedin: string,
        public tel: string,
        public aboutUs: string,
        public address: string,
        public photo: string,
        public CV_File: string,
        public experiences: [],
        public educations: [],
        public certifications: [],
    ){}
}