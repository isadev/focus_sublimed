/**
 * Used to validate de schema payload when a request is made
 * https://docs.nestjs.com/techniques/validation
 * https://docs.nestjs.com/pipes
 * https://github.com/typestack/class-validator#validation-decorators
 */

import { IsNotEmpty } from 'class-validator';

export class CreateAdminDto {
    @IsNotEmpty({ always: true })
    username: string;

    @IsNotEmpty()
    password: string;
}
