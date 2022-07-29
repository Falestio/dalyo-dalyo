import { Body, Controller, Get, Param, Post, Patch, Delete, Put } from '@nestjs/common';
import { NewPostDto } from './dtos/new-post.dto';
import { NewSpaceDto } from './dtos/new-space.dto';
import { ForumService } from './forum.service';

@Controller('forum')
export class ForumController {
  constructor(private forumService: ForumService) {}

    //* SPACE

    //* UserGuard
    @Post('space')
    createSpace(@Body() space: NewSpaceDto): Promise<NewSpaceDto> {
        return this.forumService.createSpace(space);
    }

    @Get('/space/:slug')
    getOneSpace(@Param('slug') slug: string): Promise<NewSpaceDto | null> {
        return this.forumService.getOneSpace(slug);
    }

    @Get('space')
    getAllSpaces(): Promise<NewSpaceDto[]> {
        return this.forumService.getAllSpaces();
    }

    //* SpaceAdminGuard
    @Put('space/:id')
    editSpace(@Param('id') id: string, @Body() space: NewSpaceDto): Promise<NewSpaceDto>{
        return this.forumService.editSpace(id, space);
    }

    //* SpaceCreatorGuard
    @Delete('space/:id')
    deleteSpace(@Param('id') id: string): Promise<NewSpaceDto> {
        return this.forumService.deleteSpace(id);
    }

    //* POST

    //* UserGuard
    @Post('post')
    createPost(@Body() post: NewPostDto): Promise<NewPostDto> {
        return this.forumService.createPost(post);
    }

    @Get('/post/:id')
    getOnePost(@Param('id') id: string): Promise<NewPostDto | null> {
        return this.forumService.getOnePost(id);
    }

    @Get('post')
    getAllPostsFromSpace(@Body() spaceId: string): Promise<NewPostDto[]> {
        return this.forumService.getAllPostsFromSpace(spaceId);
    }
}
