import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { AdminService } from 'src/admin/admin.service';
import { Privilege, User } from 'src/mongo/models/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LoginService {
    constructor(
        private adminService: AdminService,
        @InjectModel(User.name) private userModel: Model<User>,
    ) {}

    async LoginDto(LoginDtoLoginDto: LoginDto) {
        const username = LoginDtoLoginDto.username;

        const userFound = await this.userModel.findOne({ username }).exec();
        if (userFound.privilege === Privilege.admin) {
            return { name: userFound.username, jwt: 'eyals.askfa.asda' };
        }

        return { name: userFound.username, jwt: 'eyals2.askfa.asda' };
    }

    findAll() {
        return `This action returns all login`;
    }

    findOne(id: number) {
        return `This action returns a #${id} login`;
    }

    update(id: number, updateLoginDto: UpdateLoginDto) {
        return `This action updates a #${id} login`;
    }

    remove(id: number) {
        return `This action removes a #${id} login`;
    }
}
