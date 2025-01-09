import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Permission } from './models/permission.model';
import { PermissionService } from './permission.service';
import { CreatePermissionInput } from './dto/create-permission-input.dto';

@Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Query(() => [Permission], { name: 'getAllPermissions' })
  async findAll(): Promise<Permission[]> {
    return this.permissionService.findAll();
  }

  @Query(() => Permission, { name: 'getPermissionById', nullable: true })
  async findUnique(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Permission | null> {
    return this.permissionService.findUnique(id);
  }

  @Mutation(() => Permission, { name: 'createPermission' })
  async create(
    @Args('createPermissionInput') createPermissionInput: CreatePermissionInput,
  ): Promise<Permission> {
    return this.permissionService.create(createPermissionInput);
  }

  @Mutation(() => Permission, { name: 'updatePermission' })
  async update(
    @Args('id', { type: () => String }) id: string,
    @Args('updatePermissionInput') updatePermissionInput: CreatePermissionInput,
  ): Promise<Permission> {
    return this.permissionService.update(id, updatePermissionInput);
  }

  @Mutation(() => Permission, { name: 'deletePermission' })
  async delete(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Permission> {
    return this.permissionService.delete(id);
  }
}
