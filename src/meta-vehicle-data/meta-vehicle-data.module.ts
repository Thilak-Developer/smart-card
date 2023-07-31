import { Module } from '@nestjs/common';
import { MetaVehicleDataService } from './meta-vehicle-data.service';
import { MetaVehicleDataController } from './meta-vehicle-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetaVehicleDatum, MetaVehicleDatumSchema } from './entities/meta-vehicle-datum.entity';
import { AutoIncrement, AutoIncrementSchema } from 'src/auto-increment/auto-increment.schema';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: MetaVehicleDatum.name,
      schema: MetaVehicleDatumSchema,
      collection: "MetaVehicleDatum",
    },
    {
      name: AutoIncrement.name,
      schema: AutoIncrementSchema,
      collection: "auto-increments",
    },
  ])],
  controllers: [MetaVehicleDataController],
  providers: [MetaVehicleDataService,AutoIncrementService]
})
export class MetaVehicleDataModule { }
