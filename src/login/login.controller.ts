import { Controller, Request, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('login')
export class LoginController {
    constructor(
        private readonly loginService: LoginService,
        private authService: AuthService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }

    @Post()
    LoginDto(@Body() LoginDtoLoginDto: LoginDto) {
        return this.loginService.LoginDto(LoginDtoLoginDto);
    }

    // TODO: cambia a form
    @Get()
    async findAll(@Query() queryParams: LoginDto) {
        console.log('get simple', queryParams.username);
        const user = await this.loginService.findBy(queryParams);
        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string, @Request() req: any) {
        return req.user;
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
