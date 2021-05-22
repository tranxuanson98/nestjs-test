import { Test, TestingModule } from '@nestjs/testing';
import { BroadsController } from './broads.controller';

describe('BroadsController', () => {
  let controller: BroadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BroadsController],
    }).compile();

    controller = module.get<BroadsController>(BroadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
