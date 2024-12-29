import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { StockController } from './stock/stock.controller';
import { StockModule } from './stock/stock.module';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController, ProductController, StockController],
  imports: [ProductModule, StockModule],
  providers: [ProductsService]
})
export class ProductsModule {}
