import { Diet } from '@prisma/client';

export class DietEntity implements Diet {
  id: number;
  name: string;
}
