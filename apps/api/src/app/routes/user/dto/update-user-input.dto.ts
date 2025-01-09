import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user-input.model';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: "User's ID" })
  id: string;

  @Field(() => String, { description: "User's role ID", nullable: true })
  roleId?: string;

  @Field(() => String, { description: "User's address ID", nullable: true })
  addressId?: string;
}
