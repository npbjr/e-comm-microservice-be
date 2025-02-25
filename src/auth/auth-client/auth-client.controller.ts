import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { AuthClientService } from './auth-client.service';
import { OAuthClient } from './auth-client.schema';

@Controller('auth-client')
export class AuthClientController {
    constructor(private readonly oauthService: AuthClientService) {}

    @Post()
    async create(@Body()createOauthClientDto: any): Promise<OAuthClient> {
        return this.oauthService.create(createOauthClientDto);
    }
    @Get(':id')
    async getSecret(@Param('id') id:string): Promise<OAuthClient>{
        return this.oauthService.findById(id);
    }
}
