import { Module } from '@nestjs/common';
import { MetaDataService } from './meta-data.service';
import { MetaDataController } from './meta-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetaDatum, MetaDatumSchema } from './entities/meta-datum.entity';
import { AutoIncrement, AutoIncrementSchema } from 'src/auto-increment/auto-increment.schema';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: MetaDatum.name,
      schema: MetaDatumSchema,
      collection: "MetaDatum",
    },
    {
      name: AutoIncrement.name,
      schema: AutoIncrementSchema,
      collection: "auto-increments",
    },
  ])],
  controllers: [MetaDataController],
  providers: [MetaDataService, AutoIncrementService]
})
export class MetaDataModule { }
