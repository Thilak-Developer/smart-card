import { Module } from '@nestjs/common';
import { MetaRestaurantDataService } from './meta-restaurant-data.service';
import { MetaRestaurantDataController } from './meta-restaurant-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetaRestaurantDatum, MetaRestaurantDatumSchema } from './entities/meta-restaurant-datum.entity';
import { AutoIncrement, AutoIncrementSchema } from 'src/auto-increment/auto-increment.schema';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: MetaRestaurantDatum.name,
      schema: MetaRestaurantDatumSchema,
      collection: "MetaRestaurantDatum",
    },
    {
      name: AutoIncrement.name,
      schema: AutoIncrementSchema,
      collection: "auto-increments",
    },
  ])],
  controllers: [MetaRestaurantDataController],
  providers: [MetaRestaurantDataService,AutoIncrementService]
})

export class MetaRestaurantDataModule { }
