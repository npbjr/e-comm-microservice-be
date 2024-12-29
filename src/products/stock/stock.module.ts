import { Module } from '@nestjs/common';
import { WarehouseModule } from './warehouse/warehouse.module';
import { StockService } from './stock.service';

@Module({
  imports: [WarehouseModule],
  providers: [StockService]
})
export class StockModule {}
