import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

import { Comment } from "./comment.interface";

export type ProjectDocument = Project & Document

@Schema({ timestamps: true })
export class Project {
    // title
    @Prop({ required: true })
    title: string

    // content - markdown
    @Prop({required: true})
    content: string

    // deadline
    @Prop({ required: true, default: null })
    deadline: Date

    // classId
    @Prop({ required: true })
    classId: string

    // comments
    @Prop()
    comments: Comment[]
}

export const ProjectSchema = SchemaFactory.createForClass(Project)