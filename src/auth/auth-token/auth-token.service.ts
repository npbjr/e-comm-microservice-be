import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthTokenService {
    constructor(
        private jwtService: JwtService
    ){}

    async signIn(username:string, password, string): Promise<any>{}

    async accessToken(request_body:any): Promise<any> {
        const {client_id, client_secret, grant_type} = request_body;
        
        return {
            access_token: await this.jwtService.signAsync(request_body)
        }
    }
}
