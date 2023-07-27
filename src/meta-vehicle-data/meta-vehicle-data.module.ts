import { Module } from '@nestjs/common';
import { MetaVehicleDataService } from './meta-vehicle-data.service';
import { MetaVehicleDataController } from './meta-vehicle-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetaVehicleDatum, MetaVehicleDatumSchema } from './entities/meta-vehicle-datum.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: MetaVehicleDatum.name,
      schema: MetaVehicleDatumSchema,
      collection: "MetaVehicleDatum",
    },
  ])],
  controllers: [MetaVehicleDataController],
  providers: [MetaVehicleDataService]
})
export class MetaVehicleDataModule { }
