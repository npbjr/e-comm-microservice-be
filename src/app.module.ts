import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAccountsModule } from './user-accounts/user-accounts.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { AuthUserModule } from './auth/auth-user/auth-user.module';
import { AuthClientModule } from './auth/auth-client/auth-client.module';
import { NotificationModule } from './notification/notification.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { OauthTokenModule } from './auth/auth-client/oauth-token/oauth-token.module';
import { AuthTokenModule } from './auth/auth-token/auth-token.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/ecomtestdb'),
    UserAccountsModule, ProductsModule, OrdersModule, AuthUserModule, AuthClientModule, NotificationModule,
    AuthTokenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
