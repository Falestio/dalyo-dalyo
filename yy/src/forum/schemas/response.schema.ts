import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type ResponseDocument = Response & Document

@Schema({ timestamps: true })
export class Response {
    @Prop({ required: true })
    content: string

    @Prop({ required: true, default: 0 })
    upvotes: number
}

export const ResponseSchema = SchemaFactory.createForClass(Response)