import { Module } from "@nestjs/common";
import { CertificationsController } from './certifications.controller';
import { CertificationsService } from "./certifications.service";
@Module({
    controllers: [CertificationsController],
    providers: [CertificationsService],
})
export class personalInfoModules { }