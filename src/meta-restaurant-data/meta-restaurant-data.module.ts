import { Module } from '@nestjs/common';
import { MetaRestaurantDataService } from './meta-restaurant-data.service';
import { MetaRestaurantDataController } from './meta-restaurant-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetaRestaurantDatum, MetaRestaurantDatumSchema } from './entities/meta-restaurant-datum.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: MetaRestaurantDatum.name,
      schema: MetaRestaurantDatumSchema,
      collection: "MetaRestaurantDatum",
    },
  ])],
  controllers: [MetaRestaurantDataController],
  providers: [MetaRestaurantDataService]
})

export class MetaRestaurantDataModule { }
