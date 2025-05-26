import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  private currentId = 0;

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.currentId++,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    user.name = 'null';
    user.pokemon = [];
    return user;
  }
}
