import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Role extends BaseModel {
  @Field({ description: 'Unique name of the role' })
  name: string;

  @Field({
    nullable: true,
    description:
      'Optional description explaining the purpose and permissions of the role',
  })
  description?: string;
}
