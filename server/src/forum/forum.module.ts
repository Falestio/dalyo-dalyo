import { Module } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumController } from './forum.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schemas/post.schema';
import { ResponseSchema } from './schemas/response.schema';
import { SpaceSchema } from './schemas/space.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Post', schema: PostSchema },
      { name: 'Response', schema: ResponseSchema },
      { name: 'Space', schema: SpaceSchema },
    ]),
  ],
  providers: [ForumService],
  controllers: [ForumController],
})
export class ForumModule {}
