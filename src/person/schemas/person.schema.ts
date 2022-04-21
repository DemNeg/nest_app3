/* eslint-disable prettier/prettier */

import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PersonDocument = Person & Document;

@Schema()
export class Person{
    
    @Prop({required: true})
    firstName:string;

    @Prop()
    lastName:string;

    @Prop({required:true})
    jobTitle:string;

    @Prop(raw([
        {
            cityName:{type:String, required:true},
            street:{type:String, required:true},
            email:{type:String, required:true},
            telephone:{type:String, required:true},
        }
    ]))
    listAdress:Record<string, any>;
}


export const PersonSchema = SchemaFactory.createForClass(Person);