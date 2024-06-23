import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductTypeDocument = HydratedDocument<ProductType>;

enum MaterialType {
    wood,
    metal,
    plastic,
    fabric,
    ceramic,
}

enum SurfaceType {
    tshirt,
    pen,
    hat,
    cup,
}

@Schema()
export class ProductType {
    // if its above a plastic, ceramic
    @Prop()
    type: MaterialType;

    // if its above a tshirt, a pen an so on
    @Prop()
    surface: SurfaceType;
}

export const ProductTypeSchema = SchemaFactory.createForClass(ProductType);
