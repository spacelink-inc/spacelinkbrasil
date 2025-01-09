import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { CustomerTypeEnum } from '@prisma/client';
import { CreateCustomerInput } from './dto/create-customer-input.dto';
import { Customer } from './models/customer.model';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => Customer, { name: 'createCustomer' })
  create(@Args('input') input: CreateCustomerInput) {
    return this.customerService.create(input);
  }

  @Mutation(() => Customer, { name: 'deleteCustomer' })
  delete(@Args('id') id: string) {
    return this.customerService.delete(id);
  }

  @Mutation(() => Customer, { name: 'changeCustomerType' })
  changeType(@Args('id') id: string, @Args('type') type: CustomerTypeEnum) {
    return this.customerService.changeType(id, type);
  }

  @Query(() => [Customer], { name: 'customers' })
  findAll() {
    return this.customerService.findAll();
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args('id') id: string) {
    return this.customerService.findUnique(id);
  }

  @Query(() => Customer, { name: 'customerByEmail' })
  findByEmail(@Args('email') email: string) {
    return this.customerService.findByEmail(email);
  }
}
