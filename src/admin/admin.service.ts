import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { RopeService } from '../rope/rope.service';

@Injectable()
export class AdminService {
    constructor(private ropeService: RopeService) {}

    create(createAdminDto: CreateAdminDto) {
        console.log(`admin username ${createAdminDto.username}`);
        return 'This action adds a new admin';
    }

    findAll() {
        console.log(this.ropeService.findOne(2));
        return `This action returns all admin`;
    }

    findOne(id: number) {
        return `This action returns a #${id} admin`;
    }

    update(id: number, updateAdminDto: UpdateAdminDto) {
        console.log(`admin username ${updateAdminDto.username}`);
        return `This action updates a #${id} admin`;
    }

    remove(id: number) {
        return `This action removes a #${id} admin`;
    }
}
