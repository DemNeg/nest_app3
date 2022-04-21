/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";


export class AddPersonDto{

    @IsNotEmpty()
    @IsString()
    firstName:string;

    @IsNotEmpty()
    @IsString()
    lastName:string;

    @IsNotEmpty()
    @IsString()
    jobTitle:string;

    @IsNotEmpty()
    listAdress:[
        {
            cityName:string,
            street:string,
            email:string,
            telephone:string,
        }
    ]
}