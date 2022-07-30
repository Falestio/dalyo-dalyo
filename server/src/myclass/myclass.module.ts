import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyclassController } from './myclass.controller';
import { MyclassService } from './myclass.service';
import { ClassSchema } from './schemas/class.schema';
import { ProjectSchema } from './schemas/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Class', schema: ClassSchema },
      { name: 'Project', schema: ProjectSchema },
    ]),
  ],
  controllers: [MyclassController],
  providers: [MyclassService],
})
export class MyclassModule {}
