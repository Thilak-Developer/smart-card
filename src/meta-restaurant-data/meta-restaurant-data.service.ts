import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMetaRestaurantDatumDto } from './dto/create-meta-restaurant-datum.dto';
import { UpdateMetaRestaurantDatumDto } from './dto/update-meta-restaurant-datum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MetaRestaurantDatum } from './entities/meta-restaurant-datum.entity';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';
@Injectable()
export class MetaRestaurantDataService {
  constructor(@InjectModel(MetaRestaurantDatum.name) private metaRestaurantModel: Model<MetaRestaurantDatum>, private readonly autoIncrementService: AutoIncrementService) { }

  async create(createUserProfileDto: CreateMetaRestaurantDatumDto) {
    const metaRestaurant = await new this.metaRestaurantModel(createUserProfileDto);
    metaRestaurant._id = await this.autoIncrementService.autoIncrementID(MetaRestaurantDatum.name);
    return metaRestaurant.save();
  }

  async findAll() {
    const metaRestaurant = await this.metaRestaurantModel.find();
    if (!metaRestaurant || metaRestaurant.length == 0) {
      throw new NotFoundException('MetaRestaurant data not found!');
    }
    return metaRestaurant;
  }

  async findOne(id: string) {
    const metaRestaurant = await this.metaRestaurantModel.findById(id).exec();
    if (!metaRestaurant) {
      throw new NotFoundException(`MetaRestaurant #${id} not found`);
    }
    return metaRestaurant;
  }

  async update(id: string, updateUserProfileDto: UpdateMetaRestaurantDatumDto) {
    const metaRestaurant = await this.metaRestaurantModel.findByIdAndUpdate(id, updateUserProfileDto, { new: true });
    if (!metaRestaurant) {
      throw new NotFoundException(`MetaRestaurant #${id} not found`);
    }
    return metaRestaurant;
  }

  async remove(id: string) {
    const metaRestaurant = await this.metaRestaurantModel.findByIdAndDelete(id);
    if (!metaRestaurant) {
      throw new NotFoundException(`MetaRestaurant #${id} not found`);
    }
    return metaRestaurant;
  }
}
