import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DietsService } from './diets.service';
import { CreateDietDto } from './dto/create-diet.dto';
import { UpdateDietDto } from './dto/update-diet.dto';

@Controller('diets')
export class DietsController {
  constructor(private readonly dietsService: DietsService) {}

  @Post()
  create(@Body() createDietDto: CreateDietDto) {
    return this.dietsService.create(createDietDto);
  }

  @Get()
  findAll() {
    return this.dietsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dietsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDietDto: UpdateDietDto) {
    return this.dietsService.update(+id, updateDietDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dietsService.remove(+id);
  }
}
