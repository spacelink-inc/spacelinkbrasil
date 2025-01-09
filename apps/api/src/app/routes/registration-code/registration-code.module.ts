import { PrismaModule } from 'src/infra/modules/prisma.module';
import { RegistrationCodeResolver } from './registration-code.resolver';
import { RegistrationCodeService } from './registration-code.service';
import { Module } from '@nestjs/common';
import { MailModule } from 'src/infra/modules/mail.module';

@Module({
  imports: [PrismaModule, MailModule],
  providers: [RegistrationCodeService, RegistrationCodeResolver],
})
export class RegistrationCodeModule {}
