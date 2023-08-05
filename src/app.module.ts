import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProfileModule } from './user-profile/user-profile.module';
import { CardInfoModule } from './card-info/card-info.module';
import { MetaDataModule } from './meta-data/meta-data.module';
import { MetaVehicleDataModule } from './meta-vehicle-data/meta-vehicle-data.module';
import { MetaRestaurantDataModule } from './meta-restaurant-data/meta-restaurant-data.module';
import { MetaOwnerContactDataModule } from './meta-owner-contact-data/meta-owner-contact-data.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(`mongodb://localhost:27017/smart-card`),
    UserProfileModule,
    CardInfoModule,
    MetaDataModule,
    MetaVehicleDataModule,
    MetaRestaurantDataModule,
    MetaOwnerContactDataModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
