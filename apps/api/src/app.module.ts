import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlConfigService } from './config/graphql.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/routes/user/user.module';
import { PermissionModule } from './app/routes/permission/permission.module';
import { RoleModule } from './app/routes/role/role.module';
import { AuthModule } from './app/auth/auth.module';
import { TransferModule } from './app/routes/transfer/transfer.module';
import { CustomerModule } from './app/routes/customer/customer.module';
import { MailModule } from './infra/modules/mail.module';
import { RegistrationCodeModule } from './app/routes/registration-code/registration-code.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    MailModule,
    AuthModule,
    UserModule,
    PermissionModule,
    RoleModule,
    TransferModule,
    CustomerModule,
    RegistrationCodeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
