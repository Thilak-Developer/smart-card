import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardInfoDto } from './dto/create-card-info.dto';
import { UpdateCardInfoDto } from './dto/update-card-info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardInfo } from './entities/card-info.entity';
import { AutoIncrementService } from 'src/auto-increment/auto-increament.service';
import { CardInfoUtility } from './card-info.utility';

@Injectable()
export class CardInfoService extends CardInfoUtility {
  constructor(
    @InjectModel(CardInfo.name) private cardInfoModel: Model<CardInfo>,
    private readonly autoIncrementService: AutoIncrementService,
  ) { super() }

  async create(createUserProfileDto: CreateCardInfoDto) {
    const card = await new this.cardInfoModel(createUserProfileDto);
    card._id = await this.autoIncrementService.autoIncrementID(CardInfo.name);
    return card.save();
  }

  async findAll() {
    const card = await this.cardInfoModel.find();
    if (!card || card.length == 0) {
      throw new NotFoundException('card data not found!');
    }
    return card;
  }

  async findAllExploded() {
    const card = await this.cardInfoModel.aggregate(this.getCardInfoAggregate());
    if (!card || card.length == 0) {
      throw new NotFoundException('card data not found!');
    }
    return card;
  }

  async findOneExploded(id: string) {
    const card = await this.cardInfoModel.aggregate([{ $match: { _id: +id } }, ...this.getCardInfoAggregate()]);
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

  async remove(id: string) {
    const card = await this.cardInfoModel.findByIdAndDelete(id);
    if (!card) {
      throw new NotFoundException(`card #${id} not found`);
    }
    return card;
  }

}
