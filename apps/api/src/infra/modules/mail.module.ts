import { Module } from '@nestjs/common';
import { MailService } from '../services/mail.service';
import { MailResolver } from '../resolvers/mail.resolver';

@Module({
  providers: [MailService, MailResolver],
  exports: [MailService],
})
export class MailModule {}
