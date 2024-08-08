import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  findAll(@Query('q') q: string) {
    return this.searchService.extractEntities(q);
  }

  @Post()
  async create(@Body() data: { searchTerm: string }) {
    return this.searchService.extractEntities(data.searchTerm);
  }
}
