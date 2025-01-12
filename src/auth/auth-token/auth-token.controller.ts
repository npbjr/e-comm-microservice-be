import { Controller, Post, Body } from '@nestjs/common';
import { AuthTokenService } from './auth-token.service';
@Controller('auth-token')
export class AuthTokenController {
        constructor(private authTokenService:AuthTokenService){}

    @Post()
    async get_token(@Body()request_body: any): Promise<any> {
        return this.authTokenService.accessToken(request_body);
    }
}
