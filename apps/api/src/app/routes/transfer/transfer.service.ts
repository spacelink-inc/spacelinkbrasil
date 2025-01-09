import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/services/prisma.service';
import { CreateTransferInput } from './dto/create-transfer-input.dto';
import { TransferStatusEnum } from '@prisma/client';

@Injectable()
export class TransferService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTransferInput) {
    return this.prisma.transfer.create({
      data: {
        transferStatus: data.transferStatus,
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
      include: {
        user: true,
      },
    });
  }

  async changeStatus(id: string, status: TransferStatusEnum) {
    return this.prisma.transfer.update({
      where: { id },
      data: {
        transferStatus: status,
      },
      include: {
        user: true,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.transfer.delete({
      where: { id },
      include: {
        user: true,
      },
    });
  }
}
