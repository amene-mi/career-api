import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CertificationsService } from './certifications.service';

@Controller('certifications')
export class CertificationsController {
    constructor(private readonly certificationsService: CertificationsService) { }

    @Post()
    addCertification(
        @Body('title') cerTitle: string,
        @Body('institution') cerInstitution: string,
        @Body('description') cerDescription: string,
        @Body('issueDate') cerIssueDate: Date,
        @Body('expDate') cerExpDate: Date,
        @Body('status') cerStatus: boolean,
    ) {
        const generatedId = this.certificationsService.insertCertification(
            cerTitle,
            cerInstitution,
            cerDescription,
            cerIssueDate,
            cerExpDate,
            cerStatus
        );
        return { id: generatedId }
    }

    @Get()
    getAllCertification() {
        return this.certificationsService.getCertifications();
    }

    @Get(':id')
    getCertification(@Param('id') cerId: string) {
        return this.certificationsService.getSingleCertification(cerId);
    }

    @Patch(':id')
    updateCertification(
        @Param('id') cerId: string,
        @Body('title') cerTitle: string,
        @Body('institution') cerInstitution: string,
        @Body('description') cerDescription: string,
        @Body('issueDate') cerIssueDate: Date,
        @Body('expDate') cerExpDate: Date,
        @Body('status') cerStatus: boolean,
    ) {
        this.certificationsService.updateCertification(
            cerId,
            cerTitle,
            cerInstitution,
            cerDescription,
            cerIssueDate,
            cerExpDate,
            cerStatus);
        return null;
    }

    @Delete(':id')
    removeCertification(@Param('id') cerId: string) {
        this.certificationsService.deleteCertification(cerId);
        return null;
    }
}
