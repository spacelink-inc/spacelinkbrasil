import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infra/services/prisma.service';
import { CreateRoleInput } from './dto/create-role-input.dto';
import { Role } from './models/role.model';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async create(createRoleInput: CreateRoleInput): Promise<Role> {
    return this.prisma.role.create({
      data: createRoleInput,
    });
  }

  async findAll(): Promise<Role[]> {
    return this.prisma.role.findMany();
  }

  async findUnique(id: string): Promise<Role | null> {
    return this.prisma.role.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateRoleInput: CreateRoleInput): Promise<Role> {
    return this.prisma.role.update({
      where: { id },
      data: updateRoleInput,
    });
  }

  async delete(id: string): Promise<Role> {
    return this.prisma.role.delete({
      where: { id },
    });
  }
}
