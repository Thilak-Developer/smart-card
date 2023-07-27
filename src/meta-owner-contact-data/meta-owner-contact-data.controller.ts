import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetaOwnerContactDataService } from './meta-owner-contact-data.service';
import { CreateMetaOwnerContactDatumDto } from './dto/create-meta-owner-contact-datum.dto';
import { UpdateMetaOwnerContactDatumDto } from './dto/update-meta-owner-contact-datum.dto';

@Controller('meta-owner-contact-data')
export class MetaOwnerContactDataController {
  constructor(private readonly metaOwnerContactDataService: MetaOwnerContactDataService) {}

  @Post()
  create(@Body() createMetaOwnerContactDatumDto: CreateMetaOwnerContactDatumDto) {
    return this.metaOwnerContactDataService.create(createMetaOwnerContactDatumDto);
  }

  @Get()
  findAll() {
    return this.metaOwnerContactDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metaOwnerContactDataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetaOwnerContactDatumDto: UpdateMetaOwnerContactDatumDto) {
    return this.metaOwnerContactDataService.update(id, updateMetaOwnerContactDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metaOwnerContactDataService.remove(id);
  }
}
