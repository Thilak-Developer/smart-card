import { Test, TestingModule } from '@nestjs/testing';
import { MetaOwnerContactDataService } from './meta-owner-contact-data.service';

describe('MetaOwnerContactDataService', () => {
  let service: MetaOwnerContactDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaOwnerContactDataService],
    }).compile();

    service = module.get<MetaOwnerContactDataService>(MetaOwnerContactDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
