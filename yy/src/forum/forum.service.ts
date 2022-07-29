import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewPostDto } from './dtos/new-post.dto';
import { NewResponseDto } from './dtos/new-response.dto';
import { NewSpaceDto } from './dtos/new-space.dto';
import { PostDocument } from './schemas/post.schema';
import { ResponseDocument } from './schemas/response.schema';
import { SpaceDocument } from './schemas/space.schema';

@Injectable()
export class ForumService {
  constructor(
    @InjectModel('Space') private readonly spaceModel: Model<SpaceDocument>,
    @InjectModel('Post') private readonly postModel: Model<PostDocument>,
    @InjectModel('Response')
    private readonly responseModel: Model<ResponseDocument>,
  ) {}

  //* Space
  async createSpace(space: NewSpaceDto): Promise<SpaceDocument> {
    const newSpace = new this.spaceModel(space);
    return await newSpace.save();
  }

  async getOneSpace(slug: string): Promise<SpaceDocument | null> {
    return await this.spaceModel.findOne({ slug });
  }

  async getAllSpaces(): Promise<SpaceDocument[]> {
    return await this.spaceModel.find();
  }

  async editSpace(id: string, space: NewSpaceDto): Promise<SpaceDocument> {
    return await this.spaceModel.findByIdAndUpdate(id, space);
  }

  async deleteSpace(id: string): Promise<SpaceDocument> {
    return await this.spaceModel.findByIdAndDelete(id);
  }

  //* Post
  async createPost(post: NewPostDto): Promise<PostDocument> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }

  async getOnePost(id: string): Promise<PostDocument | null> {
    return await this.postModel.findById(id);
  }

  async getAllPostsFromSpace(spaceId: string): Promise<PostDocument[]> {
    return await this.postModel.find().where('spaceId').equals(spaceId);
  }

  async editPost(id: string, post: NewPostDto): Promise<PostDocument> {
    return await this.postModel.findByIdAndUpdate(id, post);
  }

  async deletePost(id: string): Promise<PostDocument> {
    return await this.postModel.findByIdAndDelete(id);
  }

  //* Response
  async addResponseToPost(postId: string, response: NewResponseDto) {
    const post = await this.postModel.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    const newResponse = new this.responseModel(response);
    await newResponse.save();
    post.responses.push(newResponse);
  }

  async createResponse(response: NewResponseDto): Promise<ResponseDocument> {
    const newResponse = new this.responseModel(response);
    return await newResponse.save();
  }

  async editResponse(
    id: string,
    response: NewResponseDto,
  ): Promise<ResponseDocument> {
    return await this.responseModel.findByIdAndUpdate(id, response);
  }

  async deleteResponse(id: string): Promise<ResponseDocument> {
    return await this.responseModel.findByIdAndDelete(id);
  }
}
