import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRoleInput {
  @Field(() => String, { description: 'Unique name of the role' })
  name: string;

  @Field(() => String, {
    nullable: true,
    description:
      'Optional description explaining the purpose and permissions of the role',
  })
  description?: string;
}
