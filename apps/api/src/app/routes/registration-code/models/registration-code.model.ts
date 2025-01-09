import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class RegistrationCode extends BaseModel {
  @Field(() => String, { description: 'The email of the user' })
  email: string;

  @Field(() => String, { description: 'The code of the user' })
  code: string;
}
