import { Module } from '@nestjs/common';
import { PersonalInfoModules } from 'src/modules/pesonalInfo/personalInfo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PersonalInfoModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
