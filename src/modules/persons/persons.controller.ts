import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
    constructor(private readonly personsService: PersonsService) { }

    @Post()
    addPersons(
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
        @Body('resume') infoResume: string,
    ) {
        const generatedId = this.personsService.insertPersons(
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
            infoResume,
        );
        return { id: generatedId }
    }

    @Get()
    getAllPersons() {
        return this.personsService.getPersons();
    }

    @Get(':id')
    getPersons(@Param('id') infoId: string) {
        return this.personsService.getSinglePersons(infoId);
    }

    @Patch(':id')
    updatePersons(
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
        @Body('resume') infoResume: string,
    ) {
        this.personsService.updatePersons(
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
            infoResume,);
        return null;
    }

    @Delete(':id')
    removePersons(@Param('id') infoId: string) {
        this.personsService.deletePersons(infoId);
        return null;
    }
}
