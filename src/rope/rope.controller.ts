import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RopeService } from './rope.service';
import { CreateRopeDto } from './dto/create-rope.dto';
import { UpdateRopeDto } from './dto/update-rope.dto';

@Controller('rope')
export class RopeController {
    constructor(private readonly ropeService: RopeService) {}

    @Post()
    create(@Body() createRopeDto: CreateRopeDto) {
        return this.ropeService.create(createRopeDto);
    }

    @Get()
    findAll() {
        return this.ropeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ropeService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRopeDto: UpdateRopeDto) {
        return this.ropeService.update(+id, updateRopeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ropeService.remove(+id);
    }
}
