import { Module } from "@nestjs/common";
import { PersonalInfoController } from './personalInfo.controller';
import { PersonalInfoService } from "./personalInfo.service";
@Module({
    controllers: [PersonalInfoController],
    providers: [PersonalInfoService],
})
export class PersonalInfoModule { }