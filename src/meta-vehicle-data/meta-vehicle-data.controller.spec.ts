import { Test, TestingModule } from '@nestjs/testing';
import { MetaVehicleDataController } from './meta-vehicle-data.controller';
import { MetaVehicleDataService } from './meta-vehicle-data.service';

describe('MetaVehicleDataController', () => {
  let controller: MetaVehicleDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetaVehicleDataController],
      providers: [MetaVehicleDataService],
    }).compile();

    controller = module.get<MetaVehicleDataController>(MetaVehicleDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
