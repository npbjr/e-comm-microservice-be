import { Module } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';

@Module({
  providers: [AuthUserService]
})
export class AuthUserModule {}
