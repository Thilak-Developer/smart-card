import { Module } from '@nestjs/common';
import { CardInfoService } from './card-info.service';
import { CardInfoController } from './card-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CardInfo, CardInfoSchema } from './entities/card-info.entity';
import { MetaDatum, MetaDatumSchema } from 'src/meta-data/entities/meta-datum.entity';
import { UserProfile, UserProfileSchema } from 'src/user-profile/entities/user-profile.entity';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';
import { AutoIncrement, AutoIncrementSchema } from 'src/auto-increment/auto-increment.schema';
import { MetaVehicleDatum, MetaVehicleDatumSchema } from 'src/meta-vehicle-data/entities/meta-vehicle-datum.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CardInfo.name,
        schema: CardInfoSchema,
        collection: "CardInfos",
      },
      {
        name: MetaDatum.name,
        schema: MetaDatumSchema,
        collection: "MetaDatum",
      },
      {
        name: UserProfile.name,
        schema: UserProfileSchema,
        collection: "UserProfiles",
      },
      {
        name: AutoIncrement.name,
        schema: AutoIncrementSchema,
        collection: "auto-increments",
      },
      {
        name: MetaVehicleDatum.name,
        schema: MetaVehicleDatumSchema,
        collection: "MetaVehicleDatum",
      },
    ]),
    AuthModule
  ],
  controllers: [CardInfoController],
  providers: [CardInfoService, AutoIncrementService]
})
export class CardInfoModule { }
