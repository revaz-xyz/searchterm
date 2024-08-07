import { Test, TestingModule } from '@nestjs/testing';
import { DishtypesController } from './dishtypes.controller';
import { DishtypesService } from './dishtypes.service';

describe('DishtypesController', () => {
  let controller: DishtypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DishtypesController],
      providers: [DishtypesService],
    }).compile();

    controller = module.get<DishtypesController>(DishtypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
