import { Injectable } from '@nestjs/common';
import { tokenDTO } from './oauth-token.dto';
import {tokenClientDocument, tokenClient} from './oauth-token.shcema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';

@Injectable()
export class OauthTokenService {

    constructor(@InjectModel(tokenClient.name)
        private tokenClientModel:Model<tokenClientDocument>){}
        
        private logger:Logger = new Logger(OauthTokenService.name)

    async generateToken(requestBody:any): Promise<tokenClient> {
        const { clientKey, clientSecret, grantType } = requestBody;

        // const client = await this.authClientService.findByClientId(clientKey);

        const token = `token-${clientKey}-${Date.now()}`;
        const data = new tokenDTO();
        
        data.access_token = token;
        data.expires_at="3000";
        

        const newtoken = await new this.tokenClientModel({...data}).save()
        this.logger.debug("NEW TOKEN ", JSON.stringify(newtoken));

        return newtoken

    }
}
