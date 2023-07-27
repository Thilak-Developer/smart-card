import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardInfoDto } from './dto/create-card-info.dto';
import { UpdateCardInfoDto } from './dto/update-card-info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardInfo } from './entities/card-info.entity';

@Injectable()
export class CardInfoService {
  constructor(@InjectModel(CardInfo.name) private cardInfoModel: Model<CardInfo>) { }

  async create(createUserProfileDto: CreateCardInfoDto) {
    const card = await new this.cardInfoModel(createUserProfileDto);
    return card.save();
  }

  async findAll() {
    const card = await this.cardInfoModel.find();
    if (!card || card.length == 0) {
      throw new NotFoundException('card data not found!');
    }
    return card;
  }

  async findOne(id: string) {
    const card = await this.cardInfoModel.findById(id).exec();
    if (!card) {
      throw new NotFoundException(`card #${id} not found`);
    }
    return card;
  }

  async update(id: string, updateUserProfileDto: UpdateCardInfoDto) {
    const card = await this.cardInfoModel.findByIdAndUpdate(id, updateUserProfileDto, { new: true });
    if (!card) {
      throw new NotFoundException(`card #${id} not found`);
    }
    return card;
  }

  async remove(id: string ) {
    const card = await this.cardInfoModel.findByIdAndDelete(id);
    if (!card) {
      throw new NotFoundException(`card #${id} not found`);
    }
    return card;
  }

}
