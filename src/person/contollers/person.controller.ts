/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AddPersonDto } from '../dtos/AddPerson.dto';
import { PersonService } from '../services/person.service';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService){}

    @Post('add')
    async addNewPerson(@Body() person:AddPersonDto){
        return await this.personService.addNewPerson(person);
    }
    
}
