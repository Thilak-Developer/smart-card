import { Module } from '@nestjs/common';
import { MetaOwnerContactDataService } from './meta-owner-contact-data.service';
import { MetaOwnerContactDataController } from './meta-owner-contact-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetaOwnerContactDatum, MetaOwnerContactDatumSchema } from './entities/meta-owner-contact-datum.entity';
import { AutoIncrement, AutoIncrementSchema } from 'src/auto-increment/auto-increment.schema';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: MetaOwnerContactDatum.name,
      schema: MetaOwnerContactDatumSchema,
      collection: "MetaOwnerContactDatum",
    },
    {
      name: AutoIncrement.name,
      schema: AutoIncrementSchema,
      collection: "auto-increments",
    },
  ])],
  controllers: [MetaOwnerContactDataController],
  providers: [MetaOwnerContactDataService,AutoIncrementService]
})
export class MetaOwnerContactDataModule { }
