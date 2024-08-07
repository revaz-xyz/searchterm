import { Module } from '@nestjs/common';
import { DietsService } from './diets.service';
import { DietsController } from './diets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DietsController],
  providers: [DietsService],
  imports: [PrismaModule],
})
export class DietsModule {}
