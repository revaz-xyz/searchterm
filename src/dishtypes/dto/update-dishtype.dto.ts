import { PartialType } from '@nestjs/mapped-types';
import { CreateDishtypeDto } from './create-dishtype.dto';

export class UpdateDishtypeDto extends PartialType(CreateDishtypeDto) {}
