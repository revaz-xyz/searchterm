import { Module } from '@nestjs/common';
import { DishtypesService } from './dishtypes.service';
import { DishtypesController } from './dishtypes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DishtypesController],
  providers: [DishtypesService],
  imports: [PrismaModule],
})
export class DishtypesModule {}
