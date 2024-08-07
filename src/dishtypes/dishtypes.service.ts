import { Injectable } from '@nestjs/common';
import { CreateDishtypeDto } from './dto/create-dishtype.dto';
import { UpdateDishtypeDto } from './dto/update-dishtype.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DishtypesService {
  constructor(private prisma: PrismaService) {}

  create(createDishtypeDto: CreateDishtypeDto) {
    const { name } = createDishtypeDto;

    return this.prisma.dishType.create({ data: { name } });
  }

  findAll() {
    return this.prisma.dishType.findMany();
  }

  findOne(id: number) {
    return this.prisma.dishType.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDishtypeDto: UpdateDishtypeDto) {
    const { name } = updateDishtypeDto;

    return this.prisma.dishType.update({
      where: { id },
      data: { name },
    });
  }

  remove(id: number) {
    return this.prisma.dishType.delete({
      where: { id },
    });
  }
}
