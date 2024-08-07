import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [PrismaModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
