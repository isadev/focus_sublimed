import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

    @Get()
    findAll() {
        return this.loginService.findAll();
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
