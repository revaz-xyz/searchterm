import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    return this.prisma.brand.create({ data: { name } });
  }

  findAll() {
    return this.prisma.brand.findMany();
  }

  findOne(id: number) {
    return this.prisma.brand.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    const { name } = updateBrandDto;

    return this.prisma.brand.update({
      where: { id },
      data: { name },
    });
  }

  remove(id: number) {
    return this.prisma.brand.delete({
      where: { id },
    });
  }
}
