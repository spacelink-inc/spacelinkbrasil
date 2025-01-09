import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { MailService } from '../services/mail.service';

@Resolver()
export class MailResolver {
  constructor(private mailService: MailService) {}

  @Mutation(() => Boolean)
  async sendValidationEmail(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('validationCode') validationCode: string,
  ) {
    await this.mailService.sendValidationEmail({
      username,
      email,
      validationCode,
    });
    return true;
  }

  @Mutation(() => Boolean)
  async sendWelcomeEmail(
    @Args('username') username: string,
    @Args('invitedByUsername') invitedByUsername: string,
    @Args('invitedByEmail') invitedByEmail: string,
    @Args('inviteLink') inviteLink: string,
  ) {
    await this.mailService.sendWelcomeEmail({
      username,
      invitedByUsername,
      invitedByEmail,
      inviteLink,
    });
    return true;
  }

  @Mutation(() => Boolean)
  async sendSingleWelcomeEmail(
    @Args('username') username: string,
    @Args('email') email: string,
  ) {
    await this.mailService.sendSingleWelcomeEmail({
      username,
      email,
    });
    return true;
  }
}
