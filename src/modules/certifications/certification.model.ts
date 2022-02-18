export class Certification {
    constructor(
        public id: string,
        public title: string,
        public institution: string,
        public description: string,
        public issueDate: Date,
        public expDate: Date,
        public status: boolean,
    ) { }
}