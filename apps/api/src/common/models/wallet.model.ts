import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Wallet extends BaseModel {
  @Field(() => Number, { description: "Wallet's balance" })
  balance: number;

  @Field(() => Boolean, { description: "Wallet's active status" })
  active: boolean;
}
