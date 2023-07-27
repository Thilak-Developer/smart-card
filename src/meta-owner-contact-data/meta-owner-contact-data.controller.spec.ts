import { Test, TestingModule } from '@nestjs/testing';
import { MetaOwnerContactDataController } from './meta-owner-contact-data.controller';
import { MetaOwnerContactDataService } from './meta-owner-contact-data.service';

describe('MetaOwnerContactDataController', () => {
  let controller: MetaOwnerContactDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetaOwnerContactDataController],
      providers: [MetaOwnerContactDataService],
    }).compile();

    controller = module.get<MetaOwnerContactDataController>(MetaOwnerContactDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
