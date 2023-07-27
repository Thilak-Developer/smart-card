import { Test, TestingModule } from '@nestjs/testing';
import { MetaVehicleDataService } from './meta-vehicle-data.service';

describe('MetaVehicleDataService', () => {
  let service: MetaVehicleDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaVehicleDataService],
    }).compile();

    service = module.get<MetaVehicleDataService>(MetaVehicleDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
