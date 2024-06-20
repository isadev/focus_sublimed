import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Post()
    LoginDto(@Body() LoginDtoLoginDto: LoginDto) {
        return this.loginService.LoginDto(LoginDtoLoginDto);
    }

    // TODO: cambia a form
    @Get()
    async findAll(@Query() queryParams: LoginDto) {
        console.log(queryParams.username);
        const user = await this.loginService.findBy(queryParams);
        return user;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.loginService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
        return this.loginService.update(+id, updateLoginDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.loginService.remove(+id);
    }
}
