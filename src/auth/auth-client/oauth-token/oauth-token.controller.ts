import { Controller } from '@nestjs/common';
import { Post, Get, Body } from '@nestjs/common';
import { Promise } from 'mongoose';
import { tokenDTO } from './oauth-token.dto';
import { OauthTokenService } from './oauth-token.service';
import { tokenClient } from './oauth-token.shcema';
@Controller('oauth-token')
export class OauthTokenController {
    constructor(private readonly oauthTokenService:OauthTokenService){}
    
    @Post('token')
    async create(@Body()requestBody: any): Promise<tokenClient> {
        return await this.oauthTokenService.generateToken(requestBody);
    }
}
