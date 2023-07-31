import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMetaOwnerContactDatumDto } from './dto/create-meta-owner-contact-datum.dto';
import { UpdateMetaOwnerContactDatumDto } from './dto/update-meta-owner-contact-datum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MetaOwnerContactDatum } from './entities/meta-owner-contact-datum.entity';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';
@Injectable()
export class MetaOwnerContactDataService {
  constructor(@InjectModel(MetaOwnerContactDatum.name) private metaOwnerContactModel: Model<MetaOwnerContactDatum>, private readonly autoIncrementService: AutoIncrementService) { }

  async create(createUserProfileDto: CreateMetaOwnerContactDatumDto) {
    const metaOwnerContact = await new this.metaOwnerContactModel(createUserProfileDto);
    metaOwnerContact._id = await this.autoIncrementService.autoIncrementID(MetaOwnerContactDatum.name);
    return metaOwnerContact.save();
  }

  async findAll() {
    const metaOwnerContact = await this.metaOwnerContactModel.find();
    if (!metaOwnerContact || metaOwnerContact.length == 0) {
      throw new NotFoundException('MetaOwnerContacts data not found!');
    }
    return metaOwnerContact;
  }

  async findOne(id: string) {
    const metaOwnerContact = await this.metaOwnerContactModel.findById(id).exec();
    if (!metaOwnerContact) {
      throw new NotFoundException(`MetaOwnerContact #${id} not found`);
    }
    return metaOwnerContact;
  }

  async update(id: string, updateUserProfileDto: UpdateMetaOwnerContactDatumDto) {
    const metaOwnerContact = await this.metaOwnerContactModel.findByIdAndUpdate(id, updateUserProfileDto, { new: true });
    if (!metaOwnerContact) {
      throw new NotFoundException(`MetaOwnerContact #${id} not found`);
    }
    return metaOwnerContact;
  }

  async remove(id: string) {
    const metaOwnerContact = await this.metaOwnerContactModel.findByIdAndDelete(id);
    if (!metaOwnerContact) {
      throw new NotFoundException(`MetaOwnerContact #${id} not found`);
    }
    return metaOwnerContact;
  }

}
