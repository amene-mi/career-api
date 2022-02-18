import { Injectable, NotFoundException } from '@nestjs/common';
import { check } from 'prettier';
import { Job } from './job.model';

@Injectable()
export class JobsService {
    jobs: Job[] = [];

    insertJob(
        title: string,
        location: string,
        type: string,
        description: string) {
        const jobId = Math.random().toString();
        const newJob = new Job(
            jobId,
            title,
            location,
            type,
            description);
        this.jobs.push(newJob);
        return jobId;
    }

    getJobs() {
        return [...this.jobs];
    }

    getSingleJob(jobId: string) {
        const job = this.findJob(jobId)[0];
        return { ...job };
    }

    updateJob(
        id: string,
        title: string,
        location: string,
        type: string,
        description: string) {
        const [job, index] = this.findJob(id);
        const updatedJob = { ...job };
        //validator
        if (title) {
            updatedJob.title = title;
        }

        updatedJob.location = location;
        updatedJob.type = type;
        updatedJob.description = description;
       
        this.jobs[index] = updatedJob;
    }

    deleteJob(jobId: string) {
        const index = this.findJob(jobId)[1];
        this.jobs.splice(index, 1);
    }

    private findJob(id: string): [Job, number] {
        const jobIndex = this.jobs.findIndex((p) => p.id === id);
        const job = this.jobs[jobIndex];
        if (!job) {
            throw new NotFoundException('Could not find job.!');
        }
        return [job, jobIndex];
    }
}