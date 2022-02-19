import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { personalInfoModules } from './modules/certifications/certifications.module';
import { EducationsModules } from './modules/educations/educations.module';
import { JobsModules } from './modules/jobs/jobs.module';

@Module({
  imports: [
    
    personalInfoModules,
    EducationsModules,
    JobsModules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
