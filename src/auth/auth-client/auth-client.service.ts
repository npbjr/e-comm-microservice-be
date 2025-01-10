import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { OAuthClient, OAuthClientDocument, OAuthClientSchema } from './auth-client.schema';



@Injectable()
export class AuthClientService {
    constructor(@InjectModel(OAuthClient.name)
        private oauthClientModel: Model<OAuthClientDocument> ){}
    async create(createOAuthClientDto: any): Promise<OAuthClient> {
        const newClient = new this.oauthClientModel(createOAuthClientDto);
        return newClient.save();
    }
    async findAll(): Promise<OAuthClient[]> {
        return this.oauthClientModel.find().exec();
    }
    async findById(id: string): Promise<OAuthClient> {
        return this.oauthClientModel.findById(id).exec();
    }
}   
