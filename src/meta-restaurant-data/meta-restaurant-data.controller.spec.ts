import { Test, TestingModule } from '@nestjs/testing';
import { MetaRestaurantDataController } from './meta-restaurant-data.controller';
import { MetaRestaurantDataService } from './meta-restaurant-data.service';

describe('MetaRestaurantDataController', () => {
  let controller: MetaRestaurantDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetaRestaurantDataController],
      providers: [MetaRestaurantDataService],
    }).compile();

    controller = module.get<MetaRestaurantDataController>(MetaRestaurantDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
