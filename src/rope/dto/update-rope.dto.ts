import { PartialType } from '@nestjs/mapped-types';
import { CreateRopeDto } from './create-rope.dto';

export class UpdateRopeDto extends PartialType(CreateRopeDto) {}
