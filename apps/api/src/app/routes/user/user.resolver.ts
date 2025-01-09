import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/create-user-input.model';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';
import { UpdateUserInput } from './dto/update-user-input.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User, { name: 'createUser' })
  async create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  @UseGuards(AuthGuard)
  async findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  @UseGuards(AuthGuard)
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }

  @Query(() => User, { name: 'userByEmail' })
  @UseGuards(AuthGuard)
  async findByEmail(@Args('email', { type: () => String }) email: string) {
    return this.userService.findByEmail(email);
  }

  @Query(() => User, { name: 'me' })
  @UseGuards(AuthGuard)
  async findCurrentUser(@Context() context: any) {
    return this.userService.findCurrentUser(context.user.sub);
  }

  @Mutation(() => User)
  @UseGuards(AuthGuard)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput);
  }

  @Mutation(() => User)
  @UseGuards(AuthGuard)
  async removeUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.remove(id);
  }
}
