import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TransferService } from './transfer.service';
import { Transfer } from './models/transfer.model';
import { CreateTransferInput } from './dto/create-transfer-input.dto';
import { TransferStatusEnum } from '@prisma/client';

@Resolver(() => Transfer)
export class TransferResolver {
  constructor(private transferService: TransferService) {}

  @Mutation(() => Transfer)
  async createTransfer(@Args('data') data: CreateTransferInput) {
    return this.transferService.create(data);
  }

  @Mutation(() => Transfer)
  async changeTransferStatus(
    @Args('id') id: string,
    @Args('status', { type: () => TransferStatusEnum })
    status: TransferStatusEnum,
  ) {
    return this.transferService.changeStatus(id, status);
  }

  @Mutation(() => Transfer)
  async deleteTransfer(@Args('id') id: string) {
    return this.transferService.delete(id);
  }
}
