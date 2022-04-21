/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Cat } from '../models/cat.model';
import { AddCatDto } from '../dtos/addCat.dto';

@Injectable()
export class CatService {

    constructor(@InjectModel('Cat') private readonly catModel:Model<Cat>){}

    async addNewCat(cat:AddCatDto):Promise<Cat>{
        const newCat = new this.catModel(cat);
        return await newCat.save();
    }

    async getAllCat():Promise<Cat[]>{
        return await this.catModel.find();
    }
}
