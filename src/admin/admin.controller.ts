import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Request } from 'express';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('login')
    create(@Body() createAdminDto: CreateAdminDto): string {
        return this.adminService.create(createAdminDto);
    }

    @Get('/ruta/:param_name/:param_two')
    findAll(@Req() request: Request, @Param() pathParams: number[], @Query() queryParams: string[]) {
        console.log(pathParams);
        console.log(queryParams);
        return this.adminService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.adminService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
        return this.adminService.update(+id, updateAdminDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.adminService.remove(+id);
    }
}
