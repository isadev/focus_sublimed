import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { AdminModule } from '../admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/mongo/models/user.schema';

@Module({
    controllers: [LoginController],
    providers: [LoginService],
    imports: [AdminModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
})
export class LoginModule {}