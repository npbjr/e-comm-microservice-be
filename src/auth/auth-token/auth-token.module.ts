import { Module } from '@nestjs/common';
import { AuthTokenController } from './auth-token.controller';
import { AuthTokenService } from './auth-token.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports:[
    JwtModule.register({
      global:true,
      secret:'nah',
      signOptions: {expiresIn: '60s'}
    })
  ],
  controllers: [AuthTokenController],
  providers: [AuthTokenService]
})
export class AuthTokenModule {}
