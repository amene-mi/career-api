import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';

@Controller('experiences')
export class ExperiencesController {
    constructor(private readonly experiencesService: ExperiencesService) { }

    @Post()
    addExperience(
        @Body('jobTitle') expJobTitle: string,
        @Body('company') expCompany: string,
        @Body('location') expLocation: string,
        @Body('reason') expReason: string,
        @Body('startDate') expStartDate: Date,
        @Body('endDate') expEndDate: Date,
        @Body('status') expStatus: boolean,
    ) {
        const generatedId = this.experiencesService.insertExperience(
            expJobTitle,
            expCompany,
            expLocation,
            expReason,
            expStartDate,
            expEndDate,
            expStatus
        );
        return { id: generatedId }
    }

    @Get()
    getAllExperience() {
        return this.experiencesService.getExperiences();
    }

    @Get(':id')
    getExperience(@Param('id') expId: string) {
        return this.experiencesService.getSingleExperience(expId);
    }

    @Patch(':id')
    updateExperience(
        @Param('id') expId: string,
        @Body('jobTitle') expJobTitle: string,
        @Body('company') expCompany: string,
        @Body('location') expLocation: string,
        @Body('reason') expReason: string,
        @Body('startDate') expStartDate: Date,
        @Body('endDate') expEndDate: Date,
        @Body('status') expStatus: boolean,
    ) {
        this.experiencesService.updateExperience(
            expId,
            expJobTitle,
            expCompany,
            expLocation,
            expReason,
            expStartDate,
            expEndDate,
            expStatus
        );
        return null;
    }

    @Delete(':id')
    removeExperience(@Param('id') expId: string) {
        this.experiencesService.deleteExperience(expId);
        return null;
    }
}
