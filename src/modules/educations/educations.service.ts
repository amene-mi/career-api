import { Injectable, NotFoundException } from '@nestjs/common';
import { Education } from './education.model';

@Injectable()
export class EducationsService {
    educations: Education[] = [];

    insertEducation(
        institution: string,
        major: string,
        degree: string,
        location: string,
        startDate: Date,
        endDate: Date,
        status: boolean) {
        const eduId = Math.random().toString();
        const newEducation = new Education(
            eduId,
            institution,
            major,
            degree,
            location,
            startDate,
            endDate,
            status);
        this.educations.push(newEducation);
        return eduId;
    }

    getEducations() {
        return [...this.educations];
    }

    getSingleEducation(eduId: string) {
        const education = this.findEducation(eduId)[0];
        return { ...education };
    }

    updateEducation(
        id: string,
        institution: string,
        major: string,
        degree: string,
        location: string,
        startDate: Date,
        endDate: Date,
        status: boolean) {
        const [education, index] = this.findEducation(id);
        const updatedEdu = { ...education };
        //validator
        if (institution) {
            updatedEdu.institution = institution;
        }

        updatedEdu.major = major;
        updatedEdu.degree = degree;
        updatedEdu.location = location;
        updatedEdu.startDate = startDate;
        updatedEdu.endDate = endDate;
        updatedEdu.status = status;
       
        this.educations[index] = updatedEdu;
    }

    deleteEducation(eduId: string) {
        const index = this.findEducation(eduId)[1];
        this.educations.splice(index,1);
    }

    private findEducation(id: string): [Education, number] {
        const eduIndex = this.educations.findIndex((p) => p.id === id);
        const edu = this.educations[eduIndex];
        if (!edu) {
            throw new NotFoundException('Could not find Education.!');
        }
        return [edu, eduIndex];
    }
}