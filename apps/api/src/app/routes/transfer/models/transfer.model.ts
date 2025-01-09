import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { User } from '../../user/models/user.model';
import { TransferStatusEnum } from '@prisma/client';

registerEnumType(TransferStatusEnum, {
  name: 'TransferStatusEnum',
});

@ObjectType()
export class Transfer extends BaseModel {
  @Field(() => TransferStatusEnum, { description: 'Status of the transfer' })
  transferStatus: TransferStatusEnum;

  @Field(() => User, { description: 'User who made the transfer' })
  user: User;
}
