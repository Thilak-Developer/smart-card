import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileController } from './user-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProfile, UserProfileSchema } from './entities/user-profile.entity';
import { AutoIncrement, AutoIncrementSchema } from 'src/auto-increment/auto-increment.schema';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';

@Module({
  imports: [MongooseModule.forFeature([
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
  ])],
  controllers: [UserProfileController],
  providers: [UserProfileService, AutoIncrementService]
})

export class UserProfileModule { }
