import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infra/services/prisma.service';
import { CreatePermissionInput } from './dto/create-permission-input.dto';
import { Permission } from './models/permission.model';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createPermissionInput: CreatePermissionInput,
  ): Promise<Permission> {
    return this.prisma.permission.create({
      data: {
        name: createPermissionInput.name,
        description: createPermissionInput.description,
      },
    });
  }

  async findAll(): Promise<Permission[]> {
    return this.prisma.permission.findMany();
  }

  async findUnique(id: string): Promise<Permission | null> {
    return this.prisma.permission.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateData: Partial<CreatePermissionInput>,
  ): Promise<Permission> {
    return this.prisma.permission.update({
      where: { id },
      data: updateData,
    });
  }

  async delete(id: string): Promise<Permission> {
    return this.prisma.permission.delete({
      where: { id },
    });
  }
}
