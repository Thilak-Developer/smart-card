import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CardInfoService } from './card-info.service';
import { CreateCardInfoDto } from './dto/create-card-info.dto';
import { UpdateCardInfoDto } from './dto/update-card-info.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('card-info')
export class CardInfoController {
  constructor(private readonly cardInfoService: CardInfoService) { }

  @Post()
  create(@Body() createCardInfoDto: CreateCardInfoDto) {
    return this.cardInfoService.create(createCardInfoDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.cardInfoService.findAll();
  }

  @Get('explode')
  findAllExploded() {
    return this.cardInfoService.findAllExploded();
  }

  @Get('explode/:id')
  findOneExploded(@Param('id') id: string) {
    return this.cardInfoService.findOneExploded(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardInfoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardInfoDto: UpdateCardInfoDto) {
    return this.cardInfoService.update(id, updateCardInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardInfoService.remove(id);
  }
}
