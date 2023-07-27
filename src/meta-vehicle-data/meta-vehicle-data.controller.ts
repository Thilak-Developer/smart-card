import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetaVehicleDataService } from './meta-vehicle-data.service';
import { CreateMetaVehicleDatumDto } from './dto/create-meta-vehicle-datum.dto';
import { UpdateMetaVehicleDatumDto } from './dto/update-meta-vehicle-datum.dto';

@Controller('meta-vehicle-data')
export class MetaVehicleDataController {
  constructor(private readonly metaVehicleDataService: MetaVehicleDataService) {}

  @Post()
  create(@Body() createMetaVehicleDatumDto: CreateMetaVehicleDatumDto) {
    return this.metaVehicleDataService.create(createMetaVehicleDatumDto);
  }

  @Get()
  findAll() {
    return this.metaVehicleDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metaVehicleDataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetaVehicleDatumDto: UpdateMetaVehicleDatumDto) {
    return this.metaVehicleDataService.update(id, updateMetaVehicleDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metaVehicleDataService.remove(id);
  }
}
