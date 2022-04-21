/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PersonDocument } from '../schemas/person.schema';
import { Model } from 'mongoose';
import { AddPersonDto } from '../dtos/AddPerson.dto';

@Injectable()
export class PersonService {

constructor(
    @InjectModel('Person') private readonly personModel:Model<PersonDocument>
){}
    

    async addNewPerson(person:AddPersonDto):Promise<PersonDocument>{
        const newPerson = new this.personModel(person);
        return await newPerson.save();
    }
}
