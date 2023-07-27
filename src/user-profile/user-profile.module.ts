import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileController } from './user-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProfile, UserProfileSchema } from './entities/user-profile.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: UserProfile.name,
      schema: UserProfileSchema,
      collection: "UserProfiles",
    },
  ])],
  controllers: [UserProfileController],
  providers: [UserProfileService]
})

export class UserProfileModule { }