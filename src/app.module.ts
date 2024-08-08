import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CitiesModule } from './cities/cities.module';
import { BrandsModule } from './brands/brands.module';
import { DishtypesModule } from './dishtypes/dishtypes.module';
import { DietsModule } from './diets/diets.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [PrismaModule, CitiesModule, BrandsModule, DishtypesModule, DietsModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
