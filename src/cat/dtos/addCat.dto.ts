/* eslint-disable prettier/prettier */

import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, MaxLength, Min, min, MinLength } from "class-validator";


export class AddCatDto{
   
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Type(()=>Number)
    @Min(1)
    age:number;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    breed: string;

    @IsNotEmpty()
    owner : {
        firstName:string,
        lastName:string
    }
}