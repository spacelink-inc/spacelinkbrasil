import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RegistrationCodeService } from './registration-code.service';

@Resolver()
export class RegistrationCodeResolver {
  constructor(private registrationCodeService: RegistrationCodeService) {}

  @Mutation(() => Boolean, { name: 'createRegistrationCode' })
  async create(@Args('email') email: string) {
    return this.registrationCodeService.create(email);
  }

  @Mutation(() => Boolean, { name: 'resendRegistrationCode' })
  async resend(@Args('email') email: string) {
    return this.registrationCodeService.resendValidationEmail(email);
  }

  @Mutation(() => Boolean, { name: 'verifyRegistrationCode' })
  async verify(@Args('email') email: string, @Args('code') code: string) {
    return this.registrationCodeService.verify(email, code);
  }

  @Mutation(() => Boolean, { name: 'deleteRegistrationCode' })
  async delete(@Args('email') email: string) {
    return this.registrationCodeService.delete(email);
  }
}
