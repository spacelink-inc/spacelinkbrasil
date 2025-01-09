import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePermissionInput {
  @Field(() => String, { description: 'Name of the permission' })
  name: string;

  @Field(() => String, {
    description: 'Detailed description of what the permission allows',
  })
  description: string;
}
