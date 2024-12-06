import { Test, TestingModule } from '@nestjs/testing';
import { GymInfosController } from './gym-infos.controller';
import { GymInfosService } from './gym-infos.service';

describe('GymInfosController', () => {
  let controller: GymInfosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymInfosController],
      providers: [GymInfosService],
    }).compile();

    controller = module.get<GymInfosController>(GymInfosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
