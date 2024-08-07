import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

const posts: PostModel[] = [
  {
    id: 1,
    author: 'John',
    title: 'John Smith',
    content: 'hello',
    likeCount: 1,
    commentCount: 1,
  },
  {
    id: 2,
    author: 'newjeans_official',
    title: '뉴진스 민지',
    content: '인사하는 민지',
    likeCount: 10000000,
    commentCount: 99999,
  },
  {
    id: 3,
    author: 'viviz_official',
    title: '고양이 신비',
    content: '신비는 냥',
    likeCount: 123456,
    commentCount: 12345,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  getPosts() {
    return posts;
  }
}
