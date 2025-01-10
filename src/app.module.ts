import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAccountsModule } from './user-accounts/user-accounts.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { AuthUserController } from './auth/auth-user/auth-user.controller';
import { AuthUserModule } from './auth/auth-user/auth-user.module';
import { AuthClientModule } from './auth/auth-client/auth-client.module';
import { NotificationModule } from './notification/notification.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/ecomtestdb'),
    UserAccountsModule, ProductsModule, OrdersModule, AuthUserModule, AuthClientModule, NotificationModule],
  controllers: [AppController, AuthUserController],
  providers: [AppService],
})
export class AppModule {}
