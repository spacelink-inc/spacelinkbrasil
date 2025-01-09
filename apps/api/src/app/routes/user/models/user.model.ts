import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { Role } from '../../role/models/role.model';
import { Wallet } from '../../../../common/models/wallet.model';
import { Address } from '../../../../common/models/address.model';
import { Transfer } from '../../transfer/models/transfer.model';

@ObjectType()
export class User extends BaseModel {
  @Field(() => String, { description: "User's first name" })
  name: string;

  @Field(() => String, { description: "User's last name" })
  surname: string;

  @Field(() => String, { description: "User's email address" })
  email: string;

  @Field(() => String, { description: "User's phone number" })
  phone: string;

  @Field(() => String, { description: "User's document number" })
  document: string;

  @Field(() => String, {
    nullable: true,
    description: "User's authentication token",
  })
  token?: string;

  @Field(() => Wallet, { description: "User's associated wallet" })
  wallet: Wallet;

  @Field(() => Address, { description: "User's address" })
  address: Address;

  @Field(() => Role, { description: "User's role" })
  role: Role;

  @Field(() => [Transfer], { description: "User's transfers" })
  transfers: Transfer[];
}
