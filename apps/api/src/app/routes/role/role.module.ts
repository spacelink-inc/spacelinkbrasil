import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { PrismaModule } from 'src/infra/modules/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RoleService, RoleResolver],
})
export class RoleModule {}
