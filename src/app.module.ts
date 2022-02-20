import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { CertificationsModule } from './modules/certifications/certifications.module';
import { EducationsModule } from './modules/educations/educations.module';
import { ExperiencesModule } from './modules/experiences/experiences.module';
import { PersonalInfoModule } from './modules/personalInfo/personalInfo.module';
import { JobsModules } from './modules/jobs/jobs.module';

@Module({
  imports: [
    PersonalInfoModule,
    EducationsModule,
    ExperiencesModule,
    CertificationsModule,
    JobsModules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
