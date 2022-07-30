import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import { ResponseDocument } from "./response.schema"

export type PostDocument = Post & Document

@Schema({ timestamps: true })
export class Post {
    @Prop({ required: true })
    title: string

    // markdown
    @Prop({ required: true })
    content: string

    @Prop({ required: true, default: 0 })
    upvotes: number

    // Associated space
    @Prop({ required: true })
    spaceId: string

    // response object
    @Prop()
    responses: ResponseDocument[]
}

export const PostSchema = SchemaFactory.createForClass(Post)