import { Injectable } from '@nestjs/common';
import { PrismaClient, CustomerTypeEnum } from '@prisma/client';

@Injectable()
export class CustomerService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  create(data: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    document: string;
    type: CustomerTypeEnum;
  }) {
    return this.prisma.customer.create({
      data,
    });
  }

  delete(id: string) {
    return this.prisma.customer.delete({
      where: { id },
    });
  }

  update(
    id: string,
    data: {
      name?: string;
      surname?: string;
      email?: string;
      phone?: string;
      document?: string;
    },
  ) {
    return this.prisma.customer.update({
      where: { id },
      data,
    });
  }

  changeType(id: string, type: CustomerTypeEnum) {
    return this.prisma.customer.update({
      where: { id },
      data: { type },
    });
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  findUnique(id: string) {
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }

  findByEmail(email: string) {
    return this.prisma.customer.findUnique({
      where: { email },
    });
  }
}
