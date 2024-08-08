import { PrismaClient } from '@prisma/client';
import { citiesList } from './seeders/cities';
import { brandList } from './seeders/brands';
import { dishTypesList } from './seeders/dishTypes';
import { dietsList } from './seeders/diets';

const prisma = new PrismaClient();

const transformList = (str: string): string[] =>
  str.split('\n').filter((str) => str.length > 0);

async function main() {
  const cities = transformList(citiesList);
  const brands = transformList(brandList);
  const dishTypes = transformList(dishTypesList);
  const diets = transformList(dietsList);

  console.log('Seeding database...');
  cities.map(
    async (city) => await prisma.city.create({ data: { name: city } }),
  );
  brands.map(
    async (brand) => await prisma.brand.create({ data: { name: brand } }),
  );
  dishTypes.map(
    async (dishType) =>
      await prisma.dishType.create({ data: { name: dishType } }),
  );
  diets.map(async (diet) => await prisma.diet.create({ data: { name: diet } }));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
