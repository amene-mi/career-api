import { Injectable, NotFoundException } from '@nestjs/common';
import { Persons } from './persons.model';

@Injectable()
export class PersonsService {
    persons: Persons[] = [];

    insertPersons(
        firstName: string,
        lastName: string,
        gender: Int8Array,
        birthday: Date,
        email: string,
        linkedin: string,
        tel: string,
        aboutUs: string,
        address: string,
        photo: string,
        resume: string,) {
        const infoId = Math.random().toString();
        const newPerson = new Persons(
            infoId,
            firstName,
            lastName,
            gender,
            birthday,
            email,
            linkedin,
            tel,
            aboutUs,
            address,
            photo,
            resume,);
        this.persons.push(newPerson);
        return infoId;
    }

    getPersons() {
        return [...this.persons];
    }

    getSinglePersons(infoId: string) {
        const personalInfo = this.findPersons(infoId)[0];
        return { ...personalInfo };
    }

    updatePersons(
        id: string,
        firstName: string,
        lastName: string,
        gender: Int8Array,
        birthday: Date,
        email: string,
        linkedin: string,
        tel: string,
        aboutUs: string,
        address: string,
        photo: string,
        resume: string,) {
        const [personalInfo, index] = this.findPersons(id);
        const updatedInfo = { ...personalInfo };
        //validator
        if (firstName) {
            updatedInfo.firstName = firstName;
        }

        updatedInfo.firstName = firstName;
        updatedInfo.lastName = lastName;
        updatedInfo.gender = gender;
        updatedInfo.birthday = birthday;
        updatedInfo.email = email;
        updatedInfo.linkedin = linkedin;
        updatedInfo.tel = tel;
        updatedInfo.aboutUs = aboutUs;
        updatedInfo.address = address;
        updatedInfo.photo = photo;
        updatedInfo.resume = resume;

        this.persons[index] = updatedInfo;
    }

    deletePersons(infoId: string) {
        const index = this.findPersons(infoId)[1];
        this.persons.splice(index, 1);
    }

    private findPersons(id: string): [Persons, number] {
        const infoIndex = this.persons.findIndex((p) => p.id === id);
        const info = this.persons[infoIndex];
        if (!info) {
            throw new NotFoundException('Could not find personal Information.!');
        }
        return [info, infoIndex];
    }
}