import { Module } from '@nestjs/common';
import { MetaOwnerContactDataService } from './meta-owner-contact-data.service';
import { MetaOwnerContactDataController } from './meta-owner-contact-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MetaOwnerContactDatum, MetaOwnerContactDatumSchema } from './entities/meta-owner-contact-datum.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: MetaOwnerContactDatum.name,
      schema: MetaOwnerContactDatumSchema,
      collection: "MetaOwnerContactDatum",
    },
  ])],
  controllers: [MetaOwnerContactDataController],
  providers: [MetaOwnerContactDataService]
})
export class MetaOwnerContactDataModule { }
