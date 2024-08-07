import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CitiesModule } from './cities/cities.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [PrismaModule, CitiesModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
