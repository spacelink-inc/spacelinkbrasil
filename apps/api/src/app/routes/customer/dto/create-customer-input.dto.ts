import { Field, InputType } from '@nestjs/graphql';
import { CustomerTypeEnum } from '@prisma/client';

@InputType()
export class CreateCustomerInput {
  @Field({ description: 'First name of the customer' })
  name: string;

  @Field({ description: 'Last name of the customer' })
  surname: string;

  @Field({ description: 'Email address of the customer' })
  email: string;

  @Field({ description: 'Phone number of the customer' })
  phone: string;

  @Field({ description: 'Document number (CPF/CNPJ) of the customer' })
  document: string;

  @Field(() => CustomerTypeEnum, {
    description: 'Type of the customer (CUSTOMER or USER)',
  })
  type: CustomerTypeEnum;
}
