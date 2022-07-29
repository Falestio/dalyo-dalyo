import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type SpaceDocument = Space & Document

@Schema({ timestamps: true })
export class Space {
    @Prop({ required: true })
    title: string

    @Prop({ required: true })
    slug: string

    @Prop({ required: true })
    photoUrl: string
}

export const SpaceSchema = SchemaFactory.createForClass(Space)