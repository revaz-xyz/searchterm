import { DishType } from '@prisma/client';

export class DishTypeEntity implements DishType {
  id: number;
  name: string;
}
