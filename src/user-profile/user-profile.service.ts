import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserProfile } from './entities/user-profile.entity';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';
import { UserProfileUtility } from './user-profile.utility';

@Injectable()
export class UserProfileService extends UserProfileUtility {

  constructor(@InjectModel(UserProfile.name) private userProfileModel: Model<UserProfile>, private readonly autoIncrementService: AutoIncrementService) { super() }

  async create(createUserProfileDto: CreateUserProfileDto) {
    const user = await new this.userProfileModel(createUserProfileDto);
    user._id = await this.autoIncrementService.autoIncrementID(UserProfile.name);
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

  async findAllExploded() {
    const user = await this.userProfileModel.aggregate(this.getUserProfileAggregate());
    if (!user || user.length == 0) {
      throw new NotFoundException('user data not found!');
    }
    return user;
  }

  async findOneExploded(id: string) {
    const user = await this.userProfileModel.aggregate([{ $match: { _id: +id } }, ...this.getUserProfileAggregate()]);
    if (!user || user.length == 0) {
      throw new NotFoundException('user data not found!');
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
