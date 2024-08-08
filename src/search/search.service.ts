import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface EntityDto {
  id: number;
  name: string;
  type?: string;
}

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) { }

  async extractEntities(searchTerm: string) {
    const words = searchTerm.split(' ');
    const entities = await this.findEntities(words);

    const combinations = [];
    const entityMap = {};

    entities.forEach((entity: EntityDto) => {
      const word = words.find((word) =>
        entity.name.toLowerCase().includes(word.toLowerCase()),
      );
      if (!word) return;

      if (!entityMap[word]) {
        entityMap[word] = [];
      }
      entityMap[word].push(entity);
    });

    Object.keys(entityMap).forEach((word) => {
      const entitiesForWord = entityMap[word];
      const combinationsForWord = [];

      entitiesForWord.forEach((entity: EntityDto) => {
        const combination = {};
        combination[entity.type] = entity;

        combinations.forEach((existingCombination) => {
          const newCombination = { ...existingCombination, ...combination };
          combinationsForWord.push(newCombination);
        });

        combinationsForWord.push(combination);
      });

      combinations.push(...combinationsForWord);
    });

    return combinations.filter((combination, index) => {
      const combinationString = JSON.stringify(combination);
      return (
        combinations.findIndex(
          (c) => JSON.stringify(c) === combinationString,
        ) === index
      );
    });
  }

  private async findEntities(words: string[]): Promise<EntityDto[]> {
    const entityQueries = words
      .map((w: string) => {
        const word = w.replace(/'/g, "''");
        return `
          SELECT 'city' as type, id, name FROM "City" WHERE name ILIKE '%${word}%'
          UNION ALL
          SELECT 'brand' as type, id, name FROM "Brand" WHERE name ILIKE '%${word}%'
          UNION ALL
          SELECT 'dishType' as type, id, name FROM "DishType" WHERE name ILIKE '%${word}%'
          UNION ALL
          SELECT 'diet' as type, id, name FROM "Diet" WHERE name ILIKE '%${word}%'
          `;
      })
      .join(' UNION ALL ');

    return this.prisma.$queryRawUnsafe(entityQueries);
  }
}
