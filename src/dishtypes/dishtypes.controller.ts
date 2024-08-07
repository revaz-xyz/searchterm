import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DishtypesService } from './dishtypes.service';
import { CreateDishtypeDto } from './dto/create-dishtype.dto';
import { UpdateDishtypeDto } from './dto/update-dishtype.dto';

@Controller('dishtypes')
export class DishtypesController {
  constructor(private readonly dishtypesService: DishtypesService) {}

  @Post()
  create(@Body() createDishtypeDto: CreateDishtypeDto) {
    return this.dishtypesService.create(createDishtypeDto);
  }

  @Get()
  findAll() {
    return this.dishtypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishtypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDishtypeDto: UpdateDishtypeDto) {
    return this.dishtypesService.update(+id, updateDishtypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishtypesService.remove(+id);
  }
}
