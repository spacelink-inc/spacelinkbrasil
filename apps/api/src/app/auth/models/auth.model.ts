import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/app/routes/user/models/user.model';

@ObjectType()
export class Auth {
  @Field(() => User, { description: 'User logged in' })
  user: User;

  @Field(() => String, { description: 'Session access token' })
  accessToken: string;
}
