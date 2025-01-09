import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BaseModel {
  @Field(() => String, {
    description: 'Unique identifier for the model',
  })
  id: string;

  @Field(() => Date, {
    description: 'Timestamp when the permission was created',
  })
  createdAt: Date;

  @Field(() => Date, {
    description: 'Timestamp when the permission was last updated',
  })
  updatedAt: Date;
}
