import { Module } from '@nestjs/common';
import { TransferResolver } from './transfer.resolver';
import { TransferService } from './transfer.service';
import { PrismaModule } from 'src/infra/modules/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TransferResolver, TransferService],
  exports: [TransferService],
})
export class TransferModule {}
