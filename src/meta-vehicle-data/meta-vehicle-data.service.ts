import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMetaVehicleDatumDto } from './dto/create-meta-vehicle-datum.dto';
import { UpdateMetaVehicleDatumDto } from './dto/update-meta-vehicle-datum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MetaVehicleDatum } from './entities/meta-vehicle-datum.entity';

@Injectable()
export class MetaVehicleDataService {
  constructor(@InjectModel(MetaVehicleDatum.name) private metaVehicleModel: Model<MetaVehicleDatum>) { }

  async create(createMetaVehicleDatumDto: CreateMetaVehicleDatumDto) {
    const metaVehicle = await new this.metaVehicleModel(createMetaVehicleDatumDto);
    return metaVehicle.save();
  }

  async findAll() {
    const metaVehicle = await this.metaVehicleModel.find();
    if (!metaVehicle || metaVehicle.length == 0) {
      throw new NotFoundException('MetaVehicle data not found!');
    }
    return metaVehicle;
  }

  async findOne(id: string) {
    const metaVehicle = await this.metaVehicleModel.findById(id).exec();
    if (!metaVehicle) {
      throw new NotFoundException(`MetaVehicle #${id} not found`);
    }
    return metaVehicle;
  }

  async update(id: string, updateMetaVehicleDatumDto: UpdateMetaVehicleDatumDto) {
    const metaVehicle = await this.metaVehicleModel.findByIdAndUpdate(id, updateMetaVehicleDatumDto, { new: true });
    if (!metaVehicle) {
      throw new NotFoundException(`MetaVehicle #${id} not found`);
    }
    return metaVehicle;
  }

  async remove(id: string) {
    const metaVehicle = await this.metaVehicleModel.findByIdAndDelete(id);
    if (!metaVehicle) {
      throw new NotFoundException(`MetaVehicle #${id} not found`);
    }
    return metaVehicle;
  }

}
