import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserProfile } from './entities/user-profile.entity';

@Injectable()
export class UserProfileService {

  constructor(@InjectModel(UserProfile.name) private userProfileModel: Model<UserProfile>) { }

  async create(createUserProfileDto: CreateUserProfileDto) {
    const user = await new this.userProfileModel(createUserProfileDto);
    return user.save();
  }

  async findAll() {
    const users = await this.userProfileModel.find();
    if (!users || users.length == 0) {
      throw new NotFoundException('Users data not found!');
    }
    return users;
  }

  async findOne(id: string) {
    const user = await this.userProfileModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserProfileDto: UpdateUserProfileDto) {
    const user = await this.userProfileModel.findByIdAndUpdate(id, updateUserProfileDto, { new: true });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async remove(id: string) {
    const user = await this.userProfileModel.findByIdAndDelete(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

}
