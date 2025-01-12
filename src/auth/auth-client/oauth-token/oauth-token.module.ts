import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OauthTokenController } from './oauth-token.controller';
import { OauthTokenService } from './oauth-token.service';
import { tokenClient, tokoClientSchema } from './oauth-token.shcema';
@Module({
  controllers: [OauthTokenController],
  imports: [
      MongooseModule.forFeature([{name: tokenClient.name, schema: tokoClientSchema}])
    ],
  providers:[OauthTokenService]
})
export class OauthTokenModule {}
