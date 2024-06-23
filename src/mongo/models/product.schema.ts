import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ProductType } from './product-type.schema';
import { SublimedMethod } from './sublimed-method.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    // could be also a email
    @Prop()
    username: string;

    @Prop()
    password: number;

    @Prop()
    name: string;

    @Prop()
    privilege: string;

    // Foreing key to product type
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProductType' })
    productTypeFk: ProductType;

    // Foreing key to method type
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'SublimedMethod' })
    sublimedMethodFk: SublimedMethod;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
