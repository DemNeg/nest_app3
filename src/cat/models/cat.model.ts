/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
    name : {type:String, required:true},
    age : {type:Number, required:true},
    breed : {type:String, required:true},
    owner : {
        firstName:String,
        lastName:String
    },   
})

export interface Cat {
    id:string,
    name: string,
    age:number,
    breed: string, 
    owner : {
        firstName:string,
        lastName:string
    }
}