import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { StockController } from './stock/stock.controller';
import { StockModule } from './stock/stock.module';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController, StockController],
  imports: [ StockModule],
  providers: [ProductsService]
})
export class ProductsModule {}
