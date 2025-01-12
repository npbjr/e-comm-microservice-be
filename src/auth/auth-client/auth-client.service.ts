import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { OAuthClient, OAuthClientDocument, OAuthClientSchema } from './auth-client.schema';


@Injectable()
export class AuthClientService {
    constructor(@InjectModel(OAuthClient.name)
        private oauthClientModel: Model<OAuthClientDocument> ){}
        private logger: Logger = new Logger(AuthClientService.name)
    async create(createOAuthClientDto: any): Promise<OAuthClient> {
        const newClient = new this.oauthClientModel(createOAuthClientDto);
        return newClient.save();
    }
    async findAll(): Promise<OAuthClient[]> {
        return this.oauthClientModel.find().exec();
    }
    async findById(id: string): Promise<OAuthClient> {
        this.logger.debug("FIND BY ID:",id);
        const response = await this.oauthClientModel.findById(id).exec();
    
        this.logger.debug("FIND BY ID RESPONSE:",JSON.stringify(response));
        return response;
        
    }

    async findByClientId(clientKey: string): Promise<OAuthClient[]> {
        const response = await this.oauthClientModel.find({clientKey}).exec();
        this.logger.debug("FIND BY CLIENTKEY RESPONSE:",JSON.stringify(response));
        return response;
    }
}   
