export class Experience{
    constructor(
        public id: string,
        public jobTitle: string,
        public company: string,
        public location: string,
        public reason: string,
        public startDate: Date,
        public endDate: Date,
        public status: boolean,
    ){}
}