import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) { }

    @Post()
    addJob(
        @Body('title') jobTitle: string,
        @Body('location') jobLocation: string,
        @Body('type') jobType: string,
        @Body('description') jobDescription: string
    ) {
        const generatedId = this.jobsService.insertJob(
            jobTitle,
            jobLocation,
            jobType,
            jobDescription
        );
        return { id: generatedId }
    }

    @Get()
    getAllJob() {
        return this.jobsService.getJobs();
    }

    @Get(':id')
    getJob(@Param('id') jobId: string) {
        return this.jobsService.getSingleJob(jobId);
    }

    @Patch(':id')
    updateJob(
        @Param('id') jobId: string,
        @Body('title') jobTitle: string,
        @Body('location') jobLocation: string,
        @Body('type') jobType: string,
        @Body('description') jobDescription: string
    ) {
        this.jobsService.updateJob(
            jobId,
            jobTitle,
            jobLocation,
            jobType,
            jobDescription);
        return null;
    }

    @Delete(':id')
    removeJob(@Param('id') jobId: string) {
        this.jobsService.deleteJob(jobId);
        return null;
    }
}
