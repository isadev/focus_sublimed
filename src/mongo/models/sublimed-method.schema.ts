import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SublimedMethodDocument = HydratedDocument<SublimedMethod>;

enum SublimedType {
    sewn,
    embroidered,
}

@Schema()
export class SublimedMethod {
    // could be also a email
    @Prop()
    type: SublimedType;
}

export const SublimedMethodSchema = SchemaFactory.createForClass(SublimedMethod);
