import { Module } from '@nestjs/common';
import { MetaDataService } from './meta-data.service';
import { MetaDataController } from './meta-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetaDatum, MetaDatumSchema } from './entities/meta-datum.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: MetaDatum.name,
      schema: MetaDatumSchema,
      collection: "MetaDatum",
    },
  ])],
  controllers: [MetaDataController],
  providers: [MetaDataService]
})
export class MetaDataModule { }
