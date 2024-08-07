import { Test, TestingModule } from '@nestjs/testing';
import { DishtypesService } from './dishtypes.service';

describe('DishtypesService', () => {
  let service: DishtypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DishtypesService],
    }).compile();

    service = module.get<DishtypesService>(DishtypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
