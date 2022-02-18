import { Injectable, NotFoundException } from '@nestjs/common';
import { Certification } from './certification.model';

@Injectable()
export class CertificationsService {
    certifications: Certification[] = [];

    insertCertification(
        title: string,
        institution: string,
        description: string,
        issueDate: Date,
        expDate: Date,
        status: boolean
        ) {
        const cerId = Math.random().toString();
        const newCertification = new Certification(
            cerId,
            title,
            institution,
            description,
            issueDate,
            expDate,
            status);
        this.certifications.push(newCertification);
        return cerId;
    }

    getCertifications() {
        return [...this.certifications];
    }

    getSingleCertification(cerId: string) {
        const certification = this.findCertification(cerId)[0];
        return { ...certification };
    }

    updateCertification(
        id: string,
        title: string,
        institution: string,
        description: string,
        issueDate: Date,
        expDate: Date,
        status: boolean) {
        const [certification, index] = this.findCertification(id);
        const updatedCer = { ...certification };
        //validator
        if (title) {
            updatedCer.title = title;
        }

        updatedCer.institution = institution;
        updatedCer.description = description;
        updatedCer.issueDate = issueDate;
        updatedCer.expDate = expDate;
        updatedCer.status = status;

        this.certifications[index] = updatedCer;
    }

    deleteCertification(cerId: string) {
        const index = this.findCertification(cerId)[1];
        this.certifications.splice(index,1);
    }

    private findCertification(id: string): [Certification, number] {
        const cerIndex = this.certifications.findIndex((p) => p.id === id);
        const cer = this.certifications[cerIndex];
        if (!cer) {
            throw new NotFoundException('Could not find personal Information.!');
        }
        return [cer, cerIndex];
    }
}