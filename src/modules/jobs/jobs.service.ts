import { Injectable, NotFoundException } from '@nestjs/common';
import { Job } from './job.entity';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class JobsService {
    constructor(
        @InjectRepository(Job) private readonly jobRepository: Repository<Job>
    ) {
    }
   // jobs: Job[] = [];

    insertJob(
        title: string,
        location: string,
        type: string,
        description: string){
        const jobId = Math.random().toString();
      /*  const newJob = new Job(
            jobId,
            title,
            location,
            type,
            description);*/
        this.jobRepository.create();
        return jobId;
    }

    getJobs() {
        return [...this.jobRepository];
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
       
        this.jobRepository[index] = updatedJob;
    }

    deleteJob(jobId: string) {
        const index = this.findJob(jobId)[1];
        this.jobRepository.splice(index, 1);
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