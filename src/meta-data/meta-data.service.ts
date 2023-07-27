import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMetaDatumDto } from './dto/create-meta-datum.dto';
import { UpdateMetaDatumDto } from './dto/update-meta-datum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MetaDatum } from './entities/meta-datum.entity';

@Injectable()
export class MetaDataService {
  constructor(@InjectModel(MetaDatum.name) private metaDatumModel: Model<MetaDatum>) { }

  async create(createMetaDatumDto: CreateMetaDatumDto) {
    const metaData = await new this.metaDatumModel(createMetaDatumDto);
    return metaData.save();
  }

  async findAll() {
    const metaData = await this.metaDatumModel.find();
    if (!metaData || metaData.length == 0) {
      throw new NotFoundException('Meta data not found!');
    }
    return metaData;
  }

  async findOne(id: string) {
    const metaData = await this.metaDatumModel.findById(id).exec();
    if (!metaData) {
      throw new NotFoundException(`Meta data #${id} not found`);
    }
    return metaData;
  }

  async update(id: string, updateMetaDatumDto: UpdateMetaDatumDto) {
    const metaData = await this.metaDatumModel.findByIdAndUpdate(id, updateMetaDatumDto, { new: true });
    if (!metaData) {
      throw new NotFoundException(`MetaData #${id} not found`);
    }
    return metaData;
  }

  async remove(id: string) {
    const metaData = await this.metaDatumModel.findByIdAndDelete(id);
    if (!metaData) {
      throw new NotFoundException(`MetaData #${id} not found`);
    }
    return metaData;
  }
}
