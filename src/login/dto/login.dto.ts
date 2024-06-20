import { PartialType } from '@nestjs/mapped-types';

class LoginDtoFilter {
    enabled: boolean;
    sort: string;
}

export class LoginDto extends PartialType(LoginDtoFilter) {
    username: string;
    password: string;
}
