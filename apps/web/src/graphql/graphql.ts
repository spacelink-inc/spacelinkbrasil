/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  /** Address city */
  city: Scalars['String']['output'];
  /** Address complement */
  complement?: Maybe<Scalars['String']['output']>;
  /** Address country */
  country: Scalars['String']['output'];
  /** Timestamp when the permission was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier for the model */
  id: Scalars['String']['output'];
  /** Address neighborhood */
  neighborhood: Scalars['String']['output'];
  /** Address number */
  number: Scalars['String']['output'];
  /** Address postal code */
  postalCode: Scalars['String']['output'];
  /** Address state */
  state: Scalars['String']['output'];
  /** Address street */
  street: Scalars['String']['output'];
  /** Timestamp when the permission was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type Auth = {
  __typename?: 'Auth';
  /** Session access token */
  accessToken: Scalars['String']['output'];
  /** User logged in */
  user: User;
};

export type CreateCustomerInput = {
  /** Document number (CPF/CNPJ) of the customer */
  document: Scalars['String']['input'];
  /** Email address of the customer */
  email: Scalars['String']['input'];
  /** First name of the customer */
  name: Scalars['String']['input'];
  /** Phone number of the customer */
  phone: Scalars['String']['input'];
  /** Last name of the customer */
  surname: Scalars['String']['input'];
  /** Type of the customer (CUSTOMER or USER) */
  type: CustomerTypeEnum;
};

export type CreatePermissionInput = {
  /** Detailed description of what the permission allows */
  description: Scalars['String']['input'];
  /** Name of the permission */
  name: Scalars['String']['input'];
};

export type CreateRoleInput = {
  /** Optional description explaining the purpose and permissions of the role */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique name of the role */
  name: Scalars['String']['input'];
};

export type CreateTransferInput = {
  /** Status of the transfer */
  transferStatus?: TransferStatusEnum;
  /** ID of the user making the transfer */
  userId: Scalars['String']['input'];
};

export type CreateUserInput = {
  /** User's address ID */
  addressId?: InputMaybe<Scalars['String']['input']>;
  /** User's document number */
  document: Scalars['String']['input'];
  /** User's email address */
  email: Scalars['String']['input'];
  /** User's first name */
  name: Scalars['String']['input'];
  /** User's password */
  password: Scalars['String']['input'];
  /** User's phone number */
  phone: Scalars['String']['input'];
  /** User's role ID */
  roleId: Scalars['String']['input'];
  /** User's last name */
  surname: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  /** Timestamp when the permission was created */
  createdAt: Scalars['DateTime']['output'];
  /** Document number (CPF/CNPJ) of the customer */
  document: Scalars['String']['output'];
  /** Email address of the customer */
  email: Scalars['String']['output'];
  /** Unique identifier for the model */
  id: Scalars['String']['output'];
  /** First name of the customer */
  name: Scalars['String']['output'];
  /** Phone number of the customer */
  phone: Scalars['String']['output'];
  /** Last name of the customer */
  surname: Scalars['String']['output'];
  /** Authentication token for the customer if applicable */
  token?: Maybe<Scalars['String']['output']>;
  /** Type of the customer (CUSTOMER or USER) */
  type: CustomerTypeEnum;
  /** Timestamp when the permission was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export enum CustomerTypeEnum {
  Customer = 'CUSTOMER',
  User = 'USER'
}

export type Mutation = {
  __typename?: 'Mutation';
  changeCustomerType: Customer;
  changeTransferStatus: Transfer;
  createCustomer: Customer;
  createPermission: Permission;
  createRole: Role;
  createTransfer: Transfer;
  createUser: User;
  deleteCustomer: Customer;
  deletePermission: Permission;
  deleteRole: Role;
  deleteTransfer: Transfer;
  removeUser: User;
  signIn: Auth;
  updatePermission: Permission;
  updateRole: Role;
  updateUser: User;
};


export type MutationChangeCustomerTypeArgs = {
  id: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationChangeTransferStatusArgs = {
  id: Scalars['String']['input'];
  status: TransferStatusEnum;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreatePermissionArgs = {
  createPermissionInput: CreatePermissionInput;
};


export type MutationCreateRoleArgs = {
  createRoleInput: CreateRoleInput;
};


export type MutationCreateTransferArgs = {
  data: CreateTransferInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTransferArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['String']['input'];
  updatePermissionInput: CreatePermissionInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['String']['input'];
  updateRoleInput: CreateRoleInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  updateUserInput: CreateUserInput;
};

export type Permission = {
  __typename?: 'Permission';
  /** Timestamp when the permission was created */
  createdAt: Scalars['DateTime']['output'];
  /** Detailed description of what the permission allows */
  description: Scalars['String']['output'];
  /** Unique identifier for the model */
  id: Scalars['String']['output'];
  /** Name of the permission */
  name: Scalars['String']['output'];
  /** Timestamp when the permission was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  customer: Customer;
  customerByEmail: Customer;
  customers: Array<Customer>;
  getAllPermissions: Array<Permission>;
  getAllRoles: Array<Role>;
  getPermissionById?: Maybe<Permission>;
  getRoleById?: Maybe<Role>;
  me: User;
  user: User;
  userByEmail: User;
  users: Array<User>;
};


export type QueryCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomerByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetPermissionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRoleByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  /** Timestamp when the permission was created */
  createdAt: Scalars['DateTime']['output'];
  /** Optional description explaining the purpose and permissions of the role */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the model */
  id: Scalars['String']['output'];
  /** Unique name of the role */
  name: Scalars['String']['output'];
  /** Timestamp when the permission was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type SignInInput = {
  /** Email of the user */
  email: Scalars['String']['input'];
  /** Password of the user */
  normalizedPassword: Scalars['String']['input'];
};

export type Transfer = {
  __typename?: 'Transfer';
  /** Timestamp when the permission was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier for the model */
  id: Scalars['String']['output'];
  /** Status of the transfer */
  transferStatus: TransferStatusEnum;
  /** Timestamp when the permission was last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User who made the transfer */
  user: User;
};

export enum TransferStatusEnum {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Invoice = 'INVOICE',
  Pending = 'PENDING'
}

export type User = {
  __typename?: 'User';
  /** User's address */
  address: Address;
  /** Timestamp when the permission was created */
  createdAt: Scalars['DateTime']['output'];
  /** User's document number */
  document: Scalars['String']['output'];
  /** User's email address */
  email: Scalars['String']['output'];
  /** Unique identifier for the model */
  id: Scalars['String']['output'];
  /** User's first name */
  name: Scalars['String']['output'];
  /** User's phone number */
  phone: Scalars['String']['output'];
  /** User's role */
  role: Role;
  /** User's last name */
  surname: Scalars['String']['output'];
  /** User's authentication token */
  token?: Maybe<Scalars['String']['output']>;
  /** User's transfers */
  transfers: Array<Transfer>;
  /** Timestamp when the permission was last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User's associated wallet */
  wallet: Wallet;
};

export type Wallet = {
  __typename?: 'Wallet';
  /** Wallet's active status */
  active: Scalars['Boolean']['output'];
  /** Wallet's balance */
  balance: Scalars['Float']['output'];
  /** Timestamp when the permission was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier for the model */
  id: Scalars['String']['output'];
  /** Timestamp when the permission was last updated */
  updatedAt: Scalars['DateTime']['output'];
};
