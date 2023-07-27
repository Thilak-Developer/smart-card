import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetaRestaurantDataService } from './meta-restaurant-data.service';
import { CreateMetaRestaurantDatumDto } from './dto/create-meta-restaurant-datum.dto';
import { UpdateMetaRestaurantDatumDto } from './dto/update-meta-restaurant-datum.dto';

@Controller('meta-restaurant-data')
export class MetaRestaurantDataController {
  constructor(private readonly metaRestaurantDataService: MetaRestaurantDataService) {}

  @Post()
  create(@Body() createMetaRestaurantDatumDto: CreateMetaRestaurantDatumDto) {
    return this.metaRestaurantDataService.create(createMetaRestaurantDatumDto);
  }

  @Get()
  findAll() {
    return this.metaRestaurantDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metaRestaurantDataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetaRestaurantDatumDto: UpdateMetaRestaurantDatumDto) {
    return this.metaRestaurantDataService.update(id, updateMetaRestaurantDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metaRestaurantDataService.remove(id);
  }
}
