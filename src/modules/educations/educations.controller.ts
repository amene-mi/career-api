import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { EducationsService } from './educations.service';

@Controller('educations')
export class EducationsController {
    constructor(private readonly educationsService: EducationsService) { }

    @Post()
    addEducation(
        @Body('institution') eduInstitution: string,
        @Body('major') eduMajor: string,
        @Body('degree') eduDegree: string,
        @Body('location') eduLocation: string,
        @Body('startDate') eduStartDate: Date,
        @Body('endDate') eduEndDate: Date,
        @Body('status') eduStatus: boolean,
    ) {
        const generatedId = this.educationsService.insertEducation(
            eduInstitution,
            eduMajor,
            eduDegree,
            eduLocation,
            eduStartDate,
            eduEndDate,
            eduStatus
        );
        return { id: generatedId }
    }

    @Get()
    getAllEducation() {
        return this.educationsService.getEducations();
    }

    @Get(':id')
    getEducation(@Param('id') eduId: string) {
        return this.educationsService.getSingleEducation(eduId);
    }

    @Patch(':id')
    updateEducation(
        @Param('id') eduId: string,
        @Body('institution') eduInstitution: string,
        @Body('major') eduMajor: string,
        @Body('degree') eduDegree: string,
        @Body('location') eduLocation: string,
        @Body('startDate') eduStartDate: Date,
        @Body('endDate') eduEndDate: Date,
        @Body('status') eduStatus: boolean,
    ) {
        this.educationsService.updateEducation(
            eduId,
            eduInstitution,
            eduMajor,
            eduDegree,
            eduLocation,
            eduStartDate,
            eduEndDate,
            eduStatus);
        return null;
    }

    @Delete(':id')
    removeEducation(@Param('id') eduId: string) {
        this.educationsService.deleteEducation(eduId);
        return null;
    }
}
