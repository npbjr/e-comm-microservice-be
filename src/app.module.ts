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

@Module({
  imports: [UserAccountsModule, ProductsModule, OrdersModule, AuthUserModule, AuthClientModule, NotificationModule],
  controllers: [AppController, AuthUserController],
  providers: [AppService],
})
export class AppModule {}
