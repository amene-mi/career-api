import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { PersonalInfoService } from './personalInfo.service';

@Controller('personalInfo')
export class PersonalInfoController {
    constructor(private readonly personalInfoService: PersonalInfoService) { }

    @Post()
    addPersonalInfo(
        @Body('firstName') infoFirstName: string,
        @Body('lastName') infoLastName: string,
        @Body('gender') infoGender: Int8Array,
        @Body('birthday') infoBirthday: Date,
        @Body('email') infoEmail: string,
        @Body('linkedin') infoLinkedin: string,
        @Body('tel') infoTel: string,
        @Body('aboutUs') infoAboutUs: string,
        @Body('address') infoAddress: string,
        @Body('photo') infoPhoto: string,
        @Body('CV_File') infoCV_File: string,
        @Body('experiences') infoExperiences: [],
        @Body('educations') infoEducations: [],
        @Body('certifications') infoCertifications: [],
    ) {
        const generatedId = this.personalInfoService.insertPersonalInfo(
            infoFirstName,
            infoLastName,
            infoGender,
            infoBirthday,
            infoEmail,
            infoLinkedin,
            infoTel,
            infoAboutUs,
            infoAddress,
            infoPhoto,
            infoCV_File,
            infoExperiences,
            infoEducations,
            infoCertifications
        );
        return { id: generatedId }
    }

    @Get()
    getAllPerasonal() {
        return this.personalInfoService.getPersonalInfo();
    }

    @Get(':id')
    getPersonalInfo(@Param('id') infoId: string) {
        return this.personalInfoService.getSinglePersonalInfo(infoId);
    }

    @Patch(':id')
    updatePersonalInfo(
        @Param('id') infoId: string,
        @Body('firstName') infoFirstName: string,
        @Body('lastName') infoLastName: string,
        @Body('gender') infoGender: Int8Array,
        @Body('birthday') infoBirthday: Date,
        @Body('email') infoEmail: string,
        @Body('linkedin') infoLinkedin: string,
        @Body('tel') infoTel: string,
        @Body('aboutUs') infoAboutUs: string,
        @Body('address') infoAddress: string,
        @Body('photo') infoPhoto: string,
        @Body('CV_File') infoCV_File: string,
        @Body('experiences') infoExperiences: [],
        @Body('educations') infoEducations: [],
        @Body('certifications') infoCertifications: [],
    ) {
        this.personalInfoService.updatePersonalInfo(
            infoId,
            infoFirstName,
            infoLastName,
            infoGender,
            infoBirthday,
            infoEmail,
            infoLinkedin,
            infoTel,
            infoAboutUs,
            infoAddress,
            infoPhoto,
            infoCV_File,
            infoExperiences,
            infoEducations,
            infoCertifications);
        return null;
    }

    @Delete(':id')
    removePersonalInfo(@Param('id') infoId: string) {
        this.personalInfoService.deletePersonalInfo(infoId);
        return null;
    }
}
