import { Module } from '@nestjs/common';
import { AuthClientController } from './auth-client.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { OAuthClient, OAuthClientSchema } from './auth-client.schema';
import { AuthClientService } from './auth-client.service';


@Module({
  controllers: [AuthClientController],
  imports: [
    MongooseModule.forFeature([{name: OAuthClient.name, schema: OAuthClientSchema}])
  ],
  providers:[AuthClientService]
})
export class AuthClientModule {}
