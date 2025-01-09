import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/services/prisma.service';
import { CreateUserInput } from './dto/create-user-input.model';
import * as bcrypt from 'bcrypt';
import { UpdateUserInput } from './dto/update-user-input.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const createUser = await this.prisma.user.create({
      data: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
        password: hashedPassword,
        document: data.document,
        role: {
          connect: {
            name: 'user',
          },
        },
        ...(data.addressId && {
          address: {
            connect: {
              id: data.addressId,
            },
          },
        }),
        wallet: {
          create: {
            balance: 0,
            active: true,
          },
        },
      },
    });

    return createUser;
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        wallet: true,
        address: true,
        role: true,
        transfers: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        wallet: true,
        address: true,
        role: true,
        transfers: true,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        wallet: true,
        address: true,
        role: true,
        transfers: true,
      },
    });
  }

  async findCurrentUser(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        wallet: true,
        address: true,
        role: true,
        transfers: true,
      },
    });
  }

  async update(data: UpdateUserInput) {
    const { id, roleId, addressId, ...updateData } = data;

    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateData,
        ...(roleId && {
          role: {
            connect: {
              id: roleId,
            },
          },
        }),
        ...(addressId && {
          address: {
            connect: {
              id: addressId,
            },
          },
        }),
      },
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
      include: {
        wallet: true,
        address: true,
        role: true,
        transfers: true,
      },
    });
  }
}
