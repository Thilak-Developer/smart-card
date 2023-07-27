import { Module } from '@nestjs/common';
import { CardInfoService } from './card-info.service';
import { CardInfoController } from './card-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CardInfo, CardInfoSchema } from './entities/card-info.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: CardInfo.name,
      schema: CardInfoSchema,
      collection: "CardInfos",
    },
  ])],
  controllers: [CardInfoController],
  providers: [CardInfoService]
})
export class CardInfoModule { }
