import { Injectable, NotFoundException } from '@nestjs/common';
import { empty } from 'rxjs';
import { PersonalInfo } from './personalInfo.model';

@Injectable()
export class PersonalInfoService {
    personalInfos: PersonalInfo[] = [];

    insertPersonalInfo(
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
        CV_File: string,
        experiences: [],
        educations: [],
        certifications: []) {
        const infoId = Math.random().toString();
        const newPerson = new PersonalInfo(
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
            CV_File,
            experiences || [],
            educations,
            certifications);
        this.personalInfos.push(newPerson);
        return infoId;
    }

    getPersonalInfo() {
        return [...this.personalInfos];
    }

    getSinglePersonalInfo(infoId: string) {
        const personalInfo = this.findPersonalInfo(infoId)[0];
        return { ...personalInfo };
    }

    updatePersonalInfo(
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
        CV_File: string,
        experiences: [],
        educations: [],
        certifications: []) {
        const [personalInfo, index] = this.findPersonalInfo(id);
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
        updatedInfo.CV_File = CV_File;
        updatedInfo.experiences = experiences;
        updatedInfo.educations = educations;
        updatedInfo.certifications = certifications;

        this.personalInfos[index] = updatedInfo;
    }

    deletePersonalInfo(infoId: string) {
        const index = this.findPersonalInfo(infoId)[1];
        this.personalInfos.splice(index, 1);
    }

    private findPersonalInfo(id: string): [PersonalInfo, number] {
        const infoIndex = this.personalInfos.findIndex((p) => p.id === id);
        const info = this.personalInfos[infoIndex];
        if (!info) {
            throw new NotFoundException('Could not find personal Information.!');
        }
        return [info, infoIndex];
    }
}