/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from '../services/cat.service';
import { AddCatDto } from '../dtos/addCat.dto';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService){}

    @Post('add')
    async  addNewCat(@Body() newCat : AddCatDto) {
        return await this.catService.addNewCat(newCat)
    }

    @Get('all')
    async getAllCat(){
        return await this.catService.getAllCat();
    }
}
