import { Injectable, NotFoundException } from '@nestjs/common';
import { Experience } from './experience.model';

@Injectable()
export class ExperiencesService {
    experiences: Experience[] = [];

    insertExperience(
        jobTitle: string,
        company: string,
        location: string,
        reason: string,
        startDate: Date,
        endDate: Date,
        status: boolean) {
        const expId = Math.random().toString();
        const newExperience = new Experience(
            expId,
            jobTitle,
            company,
            location,
            reason,
            startDate,
            endDate,
            status);
        this.experiences.push(newExperience);
        return expId;
    }

    getExperiences() {
        return [...this.experiences];
    }

    getSingleExperience(expId: string) {
        const experience = this.findExperience(expId)[0];
        return { ...experience };
    }

    updateExperience(
        id: string,
        jobTitle: string,
        company: string,
        location: string,
        reason: string,
        startDate: Date,
        endDate: Date,
        status: boolean) {
        const [experience, index] = this.findExperience(id);
        const updatedExp = { ...experience };
        //validator
        if (jobTitle) {
            updatedExp.jobTitle = jobTitle;
        }

        updatedExp.company = company;
        updatedExp.location = location;
        updatedExp.reason = reason;
        updatedExp.startDate = startDate;
        updatedExp.endDate = endDate;
        updatedExp.status = status;
        
        this.experiences[index] = updatedExp;
    }

    deleteExperience(expId: string) {
        const index = this.findExperience(expId)[1];
        this.experiences.splice(index,1);
    }

    private findExperience(id: string): [Experience, number] {
        const expIndex = this.experiences.findIndex((p) => p.id === id);
        const exp = this.experiences[expIndex];
        if (!exp) {
            throw new NotFoundException('Could not find Experience.!');
        }
        return [exp, expIndex];
    }
}