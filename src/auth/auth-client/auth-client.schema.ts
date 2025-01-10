import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OAuthClientDocument = OAuthClient & Document;


@Schema()
export class OAuthClient {
    @Prop({ required: true, unique:true})
    clientKey:string;

    @Prop({required: true})
    clientSecret: string;

    @Prop({required:true, enum: ['client_credentials']})
    grantType:string;

    @Prop({type:[String],required:true})
    roles: string;

    @Prop({default: Date.now})
    createdDate: Date;

    @Prop({default: Date.now})
    modifiedDate: Date;

}
export const OAuthClientSchema = SchemaFactory.createForClass(OAuthClient);
