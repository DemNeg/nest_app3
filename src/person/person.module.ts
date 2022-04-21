/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonController } from './contollers/person.controller';
import { PersonSchema } from './schemas/person.schema';
import { PersonService } from './services/person.service';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Person',schema:PersonSchema}])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
