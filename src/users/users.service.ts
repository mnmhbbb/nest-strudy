import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersModel } from './entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly usersRepository: Repository<UsersModel>,
  ) {}

  async createUser(user: Pick<UsersModel, 'nickname' | 'email' | 'password'>) {
    // 중복 체크
    const existingNickname = await this.usersRepository.exists({
      where: {
        nickname: user.nickname,
      },
    });
    if (existingNickname) {
      throw new BadRequestException('이미 존재하는 닉네임 입니다!');
    }

    const existingEmail = await this.usersRepository.exists({
      where: {
        email: user.email,
      },
    });
    if (existingEmail) {
      throw new BadRequestException('이미 존재하는 이메일 입니다!');
    }

    const { nickname, email, password } = user;
    const userObject = await this.usersRepository.create({
      nickname,
      email,
      password,
    });

    const newUser = await this.usersRepository.save(userObject);

    return newUser;
  }

  async getUserByEmail(email: string) {
    return this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }
}
