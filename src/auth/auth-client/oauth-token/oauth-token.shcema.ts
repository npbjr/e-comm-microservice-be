import { SchemaFactory, Schema, SchemaOptions } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Prop } from "@nestjs/mongoose";


export type tokenClientDocument = tokenClient & Document;
@Schema()
export class tokenClient {

    @Prop({ required: true, unique:true})
    access_token:string;

    @Prop({ required: true})
    expires_at:string;

}
export const tokoClientSchema = SchemaFactory.createForClass(tokenClient);