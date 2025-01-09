import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Address extends BaseModel {
  @Field(() => String, { description: 'Address street' })
  street: string;

  @Field(() => String, { description: 'Address number' })
  number: string;

  @Field(() => String, { description: 'Address complement', nullable: true })
  complement?: string;

  @Field(() => String, { description: 'Address neighborhood' })
  neighborhood: string;

  @Field(() => String, { description: 'Address city' })
  city: string;

  @Field(() => String, { description: 'Address state' })
  state: string;

  @Field(() => String, { description: 'Address country' })
  country: string;

  @Field(() => String, { description: 'Address postal code' })
  postalCode: string;
}
