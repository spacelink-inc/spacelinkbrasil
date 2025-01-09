import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Role } from './models/role.model';
import { RoleService } from './role.service';
import { CreateRoleInput } from './dto/create-role-input.dto';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [Role], { name: 'getAllRoles' })
  async findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Query(() => Role, { name: 'getRoleById', nullable: true })
  async findUnique(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Role | null> {
    return this.roleService.findUnique(id);
  }

  @Mutation(() => Role, { name: 'createRole' })
  async create(
    @Args('createRoleInput') createRoleInput: CreateRoleInput,
  ): Promise<Role> {
    return this.roleService.create(createRoleInput);
  }

  @Mutation(() => Role, { name: 'updateRole' })
  async update(
    @Args('id', { type: () => String }) id: string,
    @Args('updateRoleInput') updateRoleInput: CreateRoleInput,
  ): Promise<Role> {
    return this.roleService.update(id, updateRoleInput);
  }

  @Mutation(() => Role, { name: 'deleteRole' })
  async delete(@Args('id', { type: () => String }) id: string): Promise<Role> {
    return this.roleService.delete(id);
  }
}
