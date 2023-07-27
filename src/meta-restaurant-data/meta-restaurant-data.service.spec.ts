import { Test, TestingModule } from '@nestjs/testing';
import { MetaRestaurantDataService } from './meta-restaurant-data.service';

describe('MetaRestaurantDataService', () => {
  let service: MetaRestaurantDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaRestaurantDataService],
    }).compile();

    service = module.get<MetaRestaurantDataService>(MetaRestaurantDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
