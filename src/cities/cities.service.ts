import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CitiesService {
  constructor(private prisma: PrismaService) {}

  create(createCityDto: CreateCityDto) {
    const { name } = createCityDto;

    return this.prisma.city.create({ data: { name } });
  }

  findAll() {
    return this.prisma.city.findMany();
  }

  findOne(id: number) {
    return this.prisma.city.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    const { name } = updateCityDto;

    return this.prisma.city.update({
      where: { id },
      data: { name },
    });
  }

  remove(id: number) {
    return this.prisma.city.delete({
      where: { id },
    });
  }
}
