/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [CatModule,PersonModule, MongooseModule.forRoot('mongodb://localhost/nest-test') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
