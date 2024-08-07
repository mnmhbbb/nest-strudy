import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  getPost(): Post {
    return {
      author: 'newjeans_official',
      title: '뉴진스 정규 1집 티저',
      content: '뉴진스 정규 1집 티저 사진 모음',
      likeCount: 10000000,
      commentCount: 999999,
    };
  }
}
