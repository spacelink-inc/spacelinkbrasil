import { Injectable } from '@nestjs/common';
import { MailService } from 'src/infra/services/mail.service';
import { PrismaService } from 'src/infra/services/prisma.service';

@Injectable()
export class RegistrationCodeService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}

  async create(email: string) {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();

    await this.prisma.registrationCode.create({
      data: {
        email,
        code,
      },
    });

    await this.mailService.sendValidationEmail({
      email,
      username: email.split('@')[0],
      validationCode: code,
    });

    return true;
  }

  async resendValidationEmail(email: string) {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();

    await this.prisma.registrationCode.update({
      where: { email },
      data: { code },
    });

    await this.mailService.sendValidationEmail({
      email,
      username: email.split('@')[0],
      validationCode: code,
    });

    return true;
  }

  async verify(email: string, code: string) {
    const registrationCode = await this.prisma.registrationCode.findFirst({
      where: {
        email,
        code,
      },
    });

    return !!registrationCode;
  }

  async delete(email: string) {
    await this.prisma.registrationCode.deleteMany({
      where: {
        email,
      },
    });

    return true;
  }
}
