import { Test, TestingModule } from '@nestjs/testing';
import { BroadsService } from './broads.service';

describe('BroadsService', () => {
  let service: BroadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BroadsService],
    }).compile();

    service = module.get<BroadsService>(BroadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
