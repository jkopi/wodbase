import { Test, TestingModule } from '@nestjs/testing';
import { GymInfosService } from './gym-infos.service';

describe('GymInfosService', () => {
  let service: GymInfosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GymInfosService],
    }).compile();

    service = module.get<GymInfosService>(GymInfosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
