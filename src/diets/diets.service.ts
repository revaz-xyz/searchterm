import { Injectable } from '@nestjs/common';
import { CreateDietDto } from './dto/create-diet.dto';
import { UpdateDietDto } from './dto/update-diet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DietsService {
  constructor(private prisma: PrismaService) {}

  create(createDietDto: CreateDietDto) {
    const { name } = createDietDto;

    return this.prisma.diet.create({ data: { name } });
  }

  findAll() {
    return this.prisma.diet.findMany();
  }

  findOne(id: number) {
    return this.prisma.diet.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDietDto: UpdateDietDto) {
    const { name } = updateDietDto;

    return this.prisma.diet.update({
      where: { id },
      data: { name },
    });
  }

  remove(id: number) {
    return this.prisma.diet.delete({
      where: { id },
    });
  }
}
