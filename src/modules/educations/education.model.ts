export class Education {
    constructor(
        public id: string,
        public personalId: string,
        public institution: string,
        public major: string,
        public degree: string,
        public location: string,
        public startDate: Date,
        public endDate: Date,
        public status: boolean
    ) { }
}