import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: "User's first name" })
  name: string;

  @Field(() => String, { description: "User's last name" })
  surname: string;

  @Field(() => String, { description: "User's email address" })
  email: string;

  @Field(() => String, { description: "User's phone number" })
  phone: string;

  @Field(() => String, { description: "User's password" })
  password: string;

  @Field(() => String, { description: "User's document number" })
  document: string;

  @Field(() => String, { description: "User's address ID", nullable: true })
  addressId?: string;
}
