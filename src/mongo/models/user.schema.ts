import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
export enum Privilege {
    admin,
    user,
    visitor,
}
@Schema()
export class User {
    // could be also a email
    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    name: string;

    @Prop()
    privilege: Privilege;
}

export const UserSchema = SchemaFactory.createForClass(User);
