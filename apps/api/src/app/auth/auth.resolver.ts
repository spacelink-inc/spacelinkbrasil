import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';

import { SignInInput } from './dto/sign-in-input.dto';
import { Auth } from './models/auth.model';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    return await this.authService.signIn(signInInput);
  }
}
