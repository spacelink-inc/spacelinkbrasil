import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Permission extends BaseModel {
  @Field(() => String, { description: 'Name of the permission' })
  name: string;

  @Field(() => String, {
    description: 'Detailed description of what the permission allows',
  })
  description: string;
}
