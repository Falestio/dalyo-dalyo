import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ForumModule } from './forum/forum.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/dalyo-dalyo'), ForumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
