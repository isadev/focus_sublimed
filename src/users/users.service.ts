import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/mongo/models/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async findUsername(username: string): Promise<User | undefined> {
        const userFound = await this.userModel.findOne({ username }).exec();

        return userFound;
    }
}
