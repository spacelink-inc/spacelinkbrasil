import { Field, InputType } from '@nestjs/graphql';
import { TransferStatusEnum } from '@prisma/client';

@InputType()
export class CreateTransferInput {
  @Field(() => TransferStatusEnum, {
    description: 'Status of the transfer',
    defaultValue: TransferStatusEnum.PENDING,
  })
  transferStatus: TransferStatusEnum;

  @Field(() => String, {
    description: 'ID of the user making the transfer',
  })
  userId: string;
}
