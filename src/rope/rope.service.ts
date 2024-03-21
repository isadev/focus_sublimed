import { Injectable } from '@nestjs/common';
import { CreateRopeDto } from './dto/create-rope.dto';
import { UpdateRopeDto } from './dto/update-rope.dto';

@Injectable()
export class RopeService {
    create(createRopeDto: CreateRopeDto) {
        console.log(`top rope ${createRopeDto.top}`);
        return 'This action adds a new rope';
    }

    findAll() {
        return `This action returns all rope`;
    }

    findOne(id: number) {
        return `This action returns a #${id} rope`;
    }

    update(id: number, updateRopeDto: UpdateRopeDto) {
        console.log(`bottom rope ${updateRopeDto.bottom}`);

        return `This action updates a #${id} rope`;
    }

    remove(id: number) {
        return `This action removes a #${id} rope`;
    }
}
