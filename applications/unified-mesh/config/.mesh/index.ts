// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  /**
   * Get last login for user
   *
   * Equivalent to GET /lastLoginForUser
   */
  lastLoginForUser?: Maybe<LastLoginForUser>;
  account?: Maybe<Account>;
  findFirstAccount?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  groupByAccount: Array<AccountGroupBy>;
  session?: Maybe<Session>;
  findFirstSession?: Maybe<Session>;
  sessions: Array<Session>;
  aggregateSession: AggregateSession;
  groupBySession: Array<SessionGroupBy>;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
  groupByUser: Array<UserGroupBy>;
  verificationToken?: Maybe<VerificationToken>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
  aggregateVerificationToken: AggregateVerificationToken;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
};


export type QueryaccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryfindFirstAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
};


export type QueryaccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
};


export type QueryaggregateAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerygroupByAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerysessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QueryfindFirstSessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
};


export type QuerysessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
};


export type QueryaggregateSessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerygroupBySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryuserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryfindFirstUserArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
};


export type QueryusersArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
};


export type QueryaggregateUserArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerygroupByUserArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryverificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryfindFirstVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
};


export type QueryverificationTokensArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
};


export type QueryaggregateVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerygroupByVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LastLoginForUser = {
  lastLogin?: Maybe<Scalars['String']>;
};

export type Mutation = {
  createAccount: Account;
  createManyAccount: AffectedRowsOutput;
  deleteAccount?: Maybe<Account>;
  updateAccount?: Maybe<Account>;
  deleteManyAccount: AffectedRowsOutput;
  updateManyAccount: AffectedRowsOutput;
  upsertAccount: Account;
  createSession: Session;
  createManySession: AffectedRowsOutput;
  deleteSession?: Maybe<Session>;
  updateSession?: Maybe<Session>;
  deleteManySession: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  upsertSession: Session;
  createUser: User;
  createManyUser: AffectedRowsOutput;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  upsertUser: User;
  createVerificationToken: VerificationToken;
  createManyVerificationToken: AffectedRowsOutput;
  deleteVerificationToken?: Maybe<VerificationToken>;
  updateVerificationToken?: Maybe<VerificationToken>;
  deleteManyVerificationToken: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  upsertVerificationToken: VerificationToken;
};


export type MutationcreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationcreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationdeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationupdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationdeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationupdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationupsertAccountArgs = {
  where: AccountWhereUniqueInput;
  create: AccountCreateInput;
  update: AccountUpdateInput;
};


export type MutationcreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationcreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationdeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationupdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationdeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationupdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationupsertSessionArgs = {
  where: SessionWhereUniqueInput;
  create: SessionCreateInput;
  update: SessionUpdateInput;
};


export type MutationcreateUserArgs = {
  data: UserCreateInput;
};


export type MutationcreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationdeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationupdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationdeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationupdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationupsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationcreateVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
};


export type MutationcreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationdeleteVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type MutationupdateVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationdeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationupdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationupsertVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
  create: VerificationTokenCreateInput;
  update: VerificationTokenUpdateInput;
};

export type Account = {
  id: Scalars['String'];
  userId: Scalars['String'];
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['Int']>;
  tokenType?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  idToken?: Maybe<Scalars['String']>;
  sessionState?: Maybe<Scalars['String']>;
  user: User;
};

export type User = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  count?: Maybe<UserCount>;
  accounts: Array<Account>;
  sessions: Array<Session>;
};


export type UseraccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
};


export type UsersessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
};

export type UserCount = {
  accounts: Scalars['Int'];
  sessions: Scalars['Int'];
};

export type AccountWhereInput = {
  and?: InputMaybe<Array<AccountWhereInput>>;
  or?: InputMaybe<Array<AccountWhereInput>>;
  not?: InputMaybe<Array<AccountWhereInput>>;
  id?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  accessToken?: InputMaybe<StringNullableFilter>;
  expiresAt?: InputMaybe<IntNullableFilter>;
  tokenType?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  idToken?: InputMaybe<StringNullableFilter>;
  sessionState?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type StringFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type NestedStringFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
};

export type NestedStringNullableFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  and?: InputMaybe<Array<UserWhereInput>>;
  or?: InputMaybe<Array<UserWhereInput>>;
  not?: InputMaybe<Array<UserWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  image?: InputMaybe<StringNullableFilter>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
};

export type SessionWhereInput = {
  and?: InputMaybe<Array<SessionWhereInput>>;
  or?: InputMaybe<Array<SessionWhereInput>>;
  not?: InputMaybe<Array<SessionWhereInput>>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
};

export type AccountOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refreshToken?: InputMaybe<SortOrder>;
  accessToken?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  tokenType?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  idToken?: InputMaybe<SortOrder>;
  sessionState?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type SortOrder =
  | 'asc'
  | 'desc';

export type UserOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
};

export type AccountOrderByRelationAggregateInput = {
  count?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  count?: InputMaybe<SortOrder>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  providerProviderAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export type AccountScalarFieldEnum =
  | 'id'
  | 'userId'
  | 'type'
  | 'provider'
  | 'providerAccountId'
  | 'refresh_token'
  | 'access_token'
  | 'expires_at'
  | 'token_type'
  | 'scope'
  | 'id_token'
  | 'session_state';

export type Session = {
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
  expires: Scalars['DateTime'];
  user: User;
};

export type SessionOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
};

export type SessionScalarFieldEnum =
  | 'id'
  | 'sessionToken'
  | 'userId'
  | 'expires';

export type AggregateAccount = {
  count?: Maybe<AccountCountAggregate>;
  avg?: Maybe<AccountAvgAggregate>;
  sum?: Maybe<AccountSumAggregate>;
  min?: Maybe<AccountMinAggregate>;
  max?: Maybe<AccountMaxAggregate>;
};

export type AccountCountAggregate = {
  id: Scalars['Int'];
  userId: Scalars['Int'];
  type: Scalars['Int'];
  provider: Scalars['Int'];
  providerAccountId: Scalars['Int'];
  refreshToken: Scalars['Int'];
  accessToken: Scalars['Int'];
  expiresAt: Scalars['Int'];
  tokenType: Scalars['Int'];
  scope: Scalars['Int'];
  idToken: Scalars['Int'];
  sessionState: Scalars['Int'];
  all: Scalars['Int'];
};

export type AccountAvgAggregate = {
  expiresAt?: Maybe<Scalars['Float']>;
};

export type AccountSumAggregate = {
  expiresAt?: Maybe<Scalars['Int']>;
};

export type AccountMinAggregate = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['Int']>;
  tokenType?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  idToken?: Maybe<Scalars['String']>;
  sessionState?: Maybe<Scalars['String']>;
};

export type AccountMaxAggregate = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['Int']>;
  tokenType?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  idToken?: Maybe<Scalars['String']>;
  sessionState?: Maybe<Scalars['String']>;
};

export type AccountGroupBy = {
  id: Scalars['String'];
  userId: Scalars['String'];
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['Int']>;
  tokenType?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  idToken?: Maybe<Scalars['String']>;
  sessionState?: Maybe<Scalars['String']>;
  count?: Maybe<AccountCountAggregate>;
  avg?: Maybe<AccountAvgAggregate>;
  sum?: Maybe<AccountSumAggregate>;
  min?: Maybe<AccountMinAggregate>;
  max?: Maybe<AccountMaxAggregate>;
};

export type AccountOrderByWithAggregationInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refreshToken?: InputMaybe<SortOrder>;
  accessToken?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  tokenType?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  idToken?: InputMaybe<SortOrder>;
  sessionState?: InputMaybe<SortOrder>;
  count?: InputMaybe<AccountCountOrderByAggregateInput>;
  avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  min?: InputMaybe<AccountMinOrderByAggregateInput>;
  sum?: InputMaybe<AccountSumOrderByAggregateInput>;
};

export type AccountCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refreshToken?: InputMaybe<SortOrder>;
  accessToken?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  tokenType?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  idToken?: InputMaybe<SortOrder>;
  sessionState?: InputMaybe<SortOrder>;
};

export type AccountAvgOrderByAggregateInput = {
  expiresAt?: InputMaybe<SortOrder>;
};

export type AccountMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refreshToken?: InputMaybe<SortOrder>;
  accessToken?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  tokenType?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  idToken?: InputMaybe<SortOrder>;
  sessionState?: InputMaybe<SortOrder>;
};

export type AccountMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refreshToken?: InputMaybe<SortOrder>;
  accessToken?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  tokenType?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  idToken?: InputMaybe<SortOrder>;
  sessionState?: InputMaybe<SortOrder>;
};

export type AccountSumOrderByAggregateInput = {
  expiresAt?: InputMaybe<SortOrder>;
};

export type AccountScalarWhereWithAggregatesInput = {
  and?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  or?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  not?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refreshToken?: InputMaybe<StringNullableWithAggregatesFilter>;
  accessToken?: InputMaybe<StringNullableWithAggregatesFilter>;
  expiresAt?: InputMaybe<IntNullableWithAggregatesFilter>;
  tokenType?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  idToken?: InputMaybe<StringNullableWithAggregatesFilter>;
  sessionState?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  count?: InputMaybe<NestedIntFilter>;
  min?: InputMaybe<NestedStringFilter>;
  max?: InputMaybe<NestedStringFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  count?: InputMaybe<NestedIntFilter>;
  min?: InputMaybe<NestedStringFilter>;
  max?: InputMaybe<NestedStringFilter>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  count?: InputMaybe<NestedIntNullableFilter>;
  min?: InputMaybe<NestedStringNullableFilter>;
  max?: InputMaybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  count?: InputMaybe<NestedIntNullableFilter>;
  min?: InputMaybe<NestedStringNullableFilter>;
  max?: InputMaybe<NestedStringNullableFilter>;
};

export type IntNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  count?: InputMaybe<NestedIntNullableFilter>;
  avg?: InputMaybe<NestedFloatNullableFilter>;
  sum?: InputMaybe<NestedIntNullableFilter>;
  min?: InputMaybe<NestedIntNullableFilter>;
  max?: InputMaybe<NestedIntNullableFilter>;
};

export type NestedIntNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  count?: InputMaybe<NestedIntNullableFilter>;
  avg?: InputMaybe<NestedFloatNullableFilter>;
  sum?: InputMaybe<NestedIntNullableFilter>;
  min?: InputMaybe<NestedIntNullableFilter>;
  max?: InputMaybe<NestedIntNullableFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
};

export type AggregateSession = {
  count?: Maybe<SessionCountAggregate>;
  min?: Maybe<SessionMinAggregate>;
  max?: Maybe<SessionMaxAggregate>;
};

export type SessionCountAggregate = {
  id: Scalars['Int'];
  sessionToken: Scalars['Int'];
  userId: Scalars['Int'];
  expires: Scalars['Int'];
  all: Scalars['Int'];
};

export type SessionMinAggregate = {
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
};

export type SessionMaxAggregate = {
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
};

export type SessionGroupBy = {
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
  expires: Scalars['DateTime'];
  count?: Maybe<SessionCountAggregate>;
  min?: Maybe<SessionMinAggregate>;
  max?: Maybe<SessionMaxAggregate>;
};

export type SessionOrderByWithAggregationInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  count?: InputMaybe<SessionCountOrderByAggregateInput>;
  max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  min?: InputMaybe<SessionMinOrderByAggregateInput>;
};

export type SessionCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type SessionMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type SessionMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type SessionScalarWhereWithAggregatesInput = {
  and?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  or?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  not?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  count?: InputMaybe<NestedIntFilter>;
  min?: InputMaybe<NestedDateTimeFilter>;
  max?: InputMaybe<NestedDateTimeFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  count?: InputMaybe<NestedIntFilter>;
  min?: InputMaybe<NestedDateTimeFilter>;
  max?: InputMaybe<NestedDateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type UserScalarFieldEnum =
  | 'id'
  | 'name'
  | 'email'
  | 'emailVerified'
  | 'image';

export type AggregateUser = {
  count?: Maybe<UserCountAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserCountAggregate = {
  id: Scalars['Int'];
  name: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  image: Scalars['Int'];
  all: Scalars['Int'];
};

export type UserMinAggregate = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
};

export type UserGroupBy = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  count?: Maybe<UserCountAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserOrderByWithAggregationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  count?: InputMaybe<UserCountOrderByAggregateInput>;
  max?: InputMaybe<UserMaxOrderByAggregateInput>;
  min?: InputMaybe<UserMinOrderByAggregateInput>;
};

export type UserCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
};

export type UserMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
};

export type UserMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
};

export type UserScalarWhereWithAggregatesInput = {
  and?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  or?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  not?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type DateTimeNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  count?: InputMaybe<NestedIntNullableFilter>;
  min?: InputMaybe<NestedDateTimeNullableFilter>;
  max?: InputMaybe<NestedDateTimeNullableFilter>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  count?: InputMaybe<NestedIntNullableFilter>;
  min?: InputMaybe<NestedDateTimeNullableFilter>;
  max?: InputMaybe<NestedDateTimeNullableFilter>;
};

export type VerificationToken = {
  identifier: Scalars['String'];
  token: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type VerificationTokenWhereUniqueInput = {
  token?: InputMaybe<Scalars['String']>;
  identifierToken?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenWhereInput = {
  and?: InputMaybe<Array<VerificationTokenWhereInput>>;
  or?: InputMaybe<Array<VerificationTokenWhereInput>>;
  not?: InputMaybe<Array<VerificationTokenWhereInput>>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
};

export type VerificationTokenOrderByWithRelationInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type VerificationTokenScalarFieldEnum =
  | 'identifier'
  | 'token'
  | 'expires';

export type AggregateVerificationToken = {
  count?: Maybe<VerificationTokenCountAggregate>;
  min?: Maybe<VerificationTokenMinAggregate>;
  max?: Maybe<VerificationTokenMaxAggregate>;
};

export type VerificationTokenCountAggregate = {
  identifier: Scalars['Int'];
  token: Scalars['Int'];
  expires: Scalars['Int'];
  all: Scalars['Int'];
};

export type VerificationTokenMinAggregate = {
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
};

export type VerificationTokenMaxAggregate = {
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
};

export type VerificationTokenGroupBy = {
  identifier: Scalars['String'];
  token: Scalars['String'];
  expires: Scalars['DateTime'];
  count?: Maybe<VerificationTokenCountAggregate>;
  min?: Maybe<VerificationTokenMinAggregate>;
  max?: Maybe<VerificationTokenMaxAggregate>;
};

export type VerificationTokenOrderByWithAggregationInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
};

export type VerificationTokenCountOrderByAggregateInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type VerificationTokenScalarWhereWithAggregatesInput = {
  and?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  or?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  not?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AccountCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: InputMaybe<Scalars['String']>;
  accessToken?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['Int']>;
  tokenType?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  idToken?: InputMaybe<Scalars['String']>;
  sessionState?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutAccountsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
};

export type SessionCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type SessionCreateOrConnectWithoutUserInput = {
  where: SessionWhereUniqueInput;
  create: SessionCreateWithoutUserInput;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SessionCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type UserCreateOrConnectWithoutAccountsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutAccountsInput;
};

export type AffectedRowsOutput = {
  count: Scalars['Int'];
};

export type AccountCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: InputMaybe<Scalars['String']>;
  accessToken?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['Int']>;
  tokenType?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  idToken?: InputMaybe<Scalars['String']>;
  sessionState?: InputMaybe<Scalars['String']>;
};

export type AccountUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refreshToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  accessToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  tokenType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessionState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  decrement?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
};

export type UserUpdateOneRequiredWithoutAccountsInput = {
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
  update?: InputMaybe<UserUpdateWithoutAccountsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  update: UserUpdateWithoutAccountsInput;
  create: UserCreateWithoutAccountsInput;
};

export type UserUpdateWithoutAccountsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type SessionUpdateManyWithoutUserInput = {
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  where: SessionWhereUniqueInput;
  update: SessionUpdateWithoutUserInput;
  create: SessionCreateWithoutUserInput;
};

export type SessionUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  where: SessionWhereUniqueInput;
  data: SessionUpdateWithoutUserInput;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  where: SessionScalarWhereInput;
  data: SessionUpdateManyMutationInput;
};

export type SessionScalarWhereInput = {
  and?: InputMaybe<Array<SessionScalarWhereInput>>;
  or?: InputMaybe<Array<SessionScalarWhereInput>>;
  not?: InputMaybe<Array<SessionScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
};

export type SessionUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refreshToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  accessToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  tokenType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessionState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  expires: Scalars['DateTime'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutSessionsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
};

export type AccountCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: InputMaybe<Scalars['String']>;
  accessToken?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['Int']>;
  tokenType?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  idToken?: InputMaybe<Scalars['String']>;
  sessionState?: InputMaybe<Scalars['String']>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  where: AccountWhereUniqueInput;
  create: AccountCreateWithoutUserInput;
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AccountCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: InputMaybe<Scalars['String']>;
  accessToken?: InputMaybe<Scalars['String']>;
  expiresAt?: InputMaybe<Scalars['Int']>;
  tokenType?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  idToken?: InputMaybe<Scalars['String']>;
  sessionState?: InputMaybe<Scalars['String']>;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type SessionUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsInput = {
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
  update?: InputMaybe<UserUpdateWithoutSessionsInput>;
};

export type UserUpsertWithoutSessionsInput = {
  update: UserUpdateWithoutSessionsInput;
  create: UserCreateWithoutSessionsInput;
};

export type UserUpdateWithoutSessionsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
};

export type AccountUpdateManyWithoutUserInput = {
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  where: AccountWhereUniqueInput;
  update: AccountUpdateWithoutUserInput;
  create: AccountCreateWithoutUserInput;
};

export type AccountUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refreshToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  accessToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  tokenType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  idToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessionState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  where: AccountWhereUniqueInput;
  data: AccountUpdateWithoutUserInput;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  where: AccountScalarWhereInput;
  data: AccountUpdateManyMutationInput;
};

export type AccountScalarWhereInput = {
  and?: InputMaybe<Array<AccountScalarWhereInput>>;
  or?: InputMaybe<Array<AccountScalarWhereInput>>;
  not?: InputMaybe<Array<AccountScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  accessToken?: InputMaybe<StringNullableFilter>;
  expiresAt?: InputMaybe<IntNullableFilter>;
  tokenType?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  idToken?: InputMaybe<StringNullableFilter>;
  sessionState?: InputMaybe<StringNullableFilter>;
};

export type UserCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
};

export type UserUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type VerificationTokenCreateInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type VerificationTokenCreateManyInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type VerificationTokenUpdateInput = {
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  LastLoginForUser: ResolverTypeWrapper<LastLoginForUser>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  Account: ResolverTypeWrapper<Account>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  User: ResolverTypeWrapper<User>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  UserCount: ResolverTypeWrapper<UserCount>;
  AccountWhereInput: AccountWhereInput;
  StringFilter: StringFilter;
  QueryMode: QueryMode;
  NestedStringFilter: NestedStringFilter;
  StringNullableFilter: StringNullableFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  IntNullableFilter: IntNullableFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  UserRelationFilter: UserRelationFilter;
  UserWhereInput: UserWhereInput;
  DateTimeNullableFilter: DateTimeNullableFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  AccountListRelationFilter: AccountListRelationFilter;
  SessionListRelationFilter: SessionListRelationFilter;
  SessionWhereInput: SessionWhereInput;
  DateTimeFilter: DateTimeFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  AccountOrderByWithRelationInput: AccountOrderByWithRelationInput;
  SortOrder: SortOrder;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  AccountOrderByRelationAggregateInput: AccountOrderByRelationAggregateInput;
  SessionOrderByRelationAggregateInput: SessionOrderByRelationAggregateInput;
  AccountWhereUniqueInput: AccountWhereUniqueInput;
  AccountProviderProviderAccountIdCompoundUniqueInput: AccountProviderProviderAccountIdCompoundUniqueInput;
  AccountScalarFieldEnum: AccountScalarFieldEnum;
  Session: ResolverTypeWrapper<Session>;
  SessionOrderByWithRelationInput: SessionOrderByWithRelationInput;
  SessionWhereUniqueInput: SessionWhereUniqueInput;
  SessionScalarFieldEnum: SessionScalarFieldEnum;
  AggregateAccount: ResolverTypeWrapper<AggregateAccount>;
  AccountCountAggregate: ResolverTypeWrapper<AccountCountAggregate>;
  AccountAvgAggregate: ResolverTypeWrapper<AccountAvgAggregate>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  AccountSumAggregate: ResolverTypeWrapper<AccountSumAggregate>;
  AccountMinAggregate: ResolverTypeWrapper<AccountMinAggregate>;
  AccountMaxAggregate: ResolverTypeWrapper<AccountMaxAggregate>;
  AccountGroupBy: ResolverTypeWrapper<AccountGroupBy>;
  AccountOrderByWithAggregationInput: AccountOrderByWithAggregationInput;
  AccountCountOrderByAggregateInput: AccountCountOrderByAggregateInput;
  AccountAvgOrderByAggregateInput: AccountAvgOrderByAggregateInput;
  AccountMaxOrderByAggregateInput: AccountMaxOrderByAggregateInput;
  AccountMinOrderByAggregateInput: AccountMinOrderByAggregateInput;
  AccountSumOrderByAggregateInput: AccountSumOrderByAggregateInput;
  AccountScalarWhereWithAggregatesInput: AccountScalarWhereWithAggregatesInput;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  NestedIntFilter: NestedIntFilter;
  StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
  NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
  IntNullableWithAggregatesFilter: IntNullableWithAggregatesFilter;
  NestedIntNullableWithAggregatesFilter: NestedIntNullableWithAggregatesFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  AggregateSession: ResolverTypeWrapper<AggregateSession>;
  SessionCountAggregate: ResolverTypeWrapper<SessionCountAggregate>;
  SessionMinAggregate: ResolverTypeWrapper<SessionMinAggregate>;
  SessionMaxAggregate: ResolverTypeWrapper<SessionMaxAggregate>;
  SessionGroupBy: ResolverTypeWrapper<SessionGroupBy>;
  SessionOrderByWithAggregationInput: SessionOrderByWithAggregationInput;
  SessionCountOrderByAggregateInput: SessionCountOrderByAggregateInput;
  SessionMaxOrderByAggregateInput: SessionMaxOrderByAggregateInput;
  SessionMinOrderByAggregateInput: SessionMinOrderByAggregateInput;
  SessionScalarWhereWithAggregatesInput: SessionScalarWhereWithAggregatesInput;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UserScalarFieldEnum: UserScalarFieldEnum;
  AggregateUser: ResolverTypeWrapper<AggregateUser>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserGroupBy: ResolverTypeWrapper<UserGroupBy>;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  DateTimeNullableWithAggregatesFilter: DateTimeNullableWithAggregatesFilter;
  NestedDateTimeNullableWithAggregatesFilter: NestedDateTimeNullableWithAggregatesFilter;
  VerificationToken: ResolverTypeWrapper<VerificationToken>;
  VerificationTokenWhereUniqueInput: VerificationTokenWhereUniqueInput;
  VerificationTokenIdentifierTokenCompoundUniqueInput: VerificationTokenIdentifierTokenCompoundUniqueInput;
  VerificationTokenWhereInput: VerificationTokenWhereInput;
  VerificationTokenOrderByWithRelationInput: VerificationTokenOrderByWithRelationInput;
  VerificationTokenScalarFieldEnum: VerificationTokenScalarFieldEnum;
  AggregateVerificationToken: ResolverTypeWrapper<AggregateVerificationToken>;
  VerificationTokenCountAggregate: ResolverTypeWrapper<VerificationTokenCountAggregate>;
  VerificationTokenMinAggregate: ResolverTypeWrapper<VerificationTokenMinAggregate>;
  VerificationTokenMaxAggregate: ResolverTypeWrapper<VerificationTokenMaxAggregate>;
  VerificationTokenGroupBy: ResolverTypeWrapper<VerificationTokenGroupBy>;
  VerificationTokenOrderByWithAggregationInput: VerificationTokenOrderByWithAggregationInput;
  VerificationTokenCountOrderByAggregateInput: VerificationTokenCountOrderByAggregateInput;
  VerificationTokenMaxOrderByAggregateInput: VerificationTokenMaxOrderByAggregateInput;
  VerificationTokenMinOrderByAggregateInput: VerificationTokenMinOrderByAggregateInput;
  VerificationTokenScalarWhereWithAggregatesInput: VerificationTokenScalarWhereWithAggregatesInput;
  AccountCreateInput: AccountCreateInput;
  UserCreateNestedOneWithoutAccountsInput: UserCreateNestedOneWithoutAccountsInput;
  UserCreateWithoutAccountsInput: UserCreateWithoutAccountsInput;
  SessionCreateNestedManyWithoutUserInput: SessionCreateNestedManyWithoutUserInput;
  SessionCreateWithoutUserInput: SessionCreateWithoutUserInput;
  SessionCreateOrConnectWithoutUserInput: SessionCreateOrConnectWithoutUserInput;
  SessionCreateManyUserInputEnvelope: SessionCreateManyUserInputEnvelope;
  SessionCreateManyUserInput: SessionCreateManyUserInput;
  UserCreateOrConnectWithoutAccountsInput: UserCreateOrConnectWithoutAccountsInput;
  AffectedRowsOutput: ResolverTypeWrapper<AffectedRowsOutput>;
  AccountCreateManyInput: AccountCreateManyInput;
  AccountUpdateInput: AccountUpdateInput;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  NullableIntFieldUpdateOperationsInput: NullableIntFieldUpdateOperationsInput;
  UserUpdateOneRequiredWithoutAccountsInput: UserUpdateOneRequiredWithoutAccountsInput;
  UserUpsertWithoutAccountsInput: UserUpsertWithoutAccountsInput;
  UserUpdateWithoutAccountsInput: UserUpdateWithoutAccountsInput;
  NullableDateTimeFieldUpdateOperationsInput: NullableDateTimeFieldUpdateOperationsInput;
  SessionUpdateManyWithoutUserInput: SessionUpdateManyWithoutUserInput;
  SessionUpsertWithWhereUniqueWithoutUserInput: SessionUpsertWithWhereUniqueWithoutUserInput;
  SessionUpdateWithoutUserInput: SessionUpdateWithoutUserInput;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  SessionUpdateWithWhereUniqueWithoutUserInput: SessionUpdateWithWhereUniqueWithoutUserInput;
  SessionUpdateManyWithWhereWithoutUserInput: SessionUpdateManyWithWhereWithoutUserInput;
  SessionScalarWhereInput: SessionScalarWhereInput;
  SessionUpdateManyMutationInput: SessionUpdateManyMutationInput;
  AccountUpdateManyMutationInput: AccountUpdateManyMutationInput;
  SessionCreateInput: SessionCreateInput;
  UserCreateNestedOneWithoutSessionsInput: UserCreateNestedOneWithoutSessionsInput;
  UserCreateWithoutSessionsInput: UserCreateWithoutSessionsInput;
  AccountCreateNestedManyWithoutUserInput: AccountCreateNestedManyWithoutUserInput;
  AccountCreateWithoutUserInput: AccountCreateWithoutUserInput;
  AccountCreateOrConnectWithoutUserInput: AccountCreateOrConnectWithoutUserInput;
  AccountCreateManyUserInputEnvelope: AccountCreateManyUserInputEnvelope;
  AccountCreateManyUserInput: AccountCreateManyUserInput;
  UserCreateOrConnectWithoutSessionsInput: UserCreateOrConnectWithoutSessionsInput;
  SessionCreateManyInput: SessionCreateManyInput;
  SessionUpdateInput: SessionUpdateInput;
  UserUpdateOneRequiredWithoutSessionsInput: UserUpdateOneRequiredWithoutSessionsInput;
  UserUpsertWithoutSessionsInput: UserUpsertWithoutSessionsInput;
  UserUpdateWithoutSessionsInput: UserUpdateWithoutSessionsInput;
  AccountUpdateManyWithoutUserInput: AccountUpdateManyWithoutUserInput;
  AccountUpsertWithWhereUniqueWithoutUserInput: AccountUpsertWithWhereUniqueWithoutUserInput;
  AccountUpdateWithoutUserInput: AccountUpdateWithoutUserInput;
  AccountUpdateWithWhereUniqueWithoutUserInput: AccountUpdateWithWhereUniqueWithoutUserInput;
  AccountUpdateManyWithWhereWithoutUserInput: AccountUpdateManyWithWhereWithoutUserInput;
  AccountScalarWhereInput: AccountScalarWhereInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  VerificationTokenCreateInput: VerificationTokenCreateInput;
  VerificationTokenCreateManyInput: VerificationTokenCreateManyInput;
  VerificationTokenUpdateInput: VerificationTokenUpdateInput;
  VerificationTokenUpdateManyMutationInput: VerificationTokenUpdateManyMutationInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  LastLoginForUser: LastLoginForUser;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Mutation: {};
  Account: Account;
  Int: Scalars['Int'];
  User: User;
  DateTime: Scalars['DateTime'];
  UserCount: UserCount;
  AccountWhereInput: AccountWhereInput;
  StringFilter: StringFilter;
  NestedStringFilter: NestedStringFilter;
  StringNullableFilter: StringNullableFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  IntNullableFilter: IntNullableFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  UserRelationFilter: UserRelationFilter;
  UserWhereInput: UserWhereInput;
  DateTimeNullableFilter: DateTimeNullableFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  AccountListRelationFilter: AccountListRelationFilter;
  SessionListRelationFilter: SessionListRelationFilter;
  SessionWhereInput: SessionWhereInput;
  DateTimeFilter: DateTimeFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  AccountOrderByWithRelationInput: AccountOrderByWithRelationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  AccountOrderByRelationAggregateInput: AccountOrderByRelationAggregateInput;
  SessionOrderByRelationAggregateInput: SessionOrderByRelationAggregateInput;
  AccountWhereUniqueInput: AccountWhereUniqueInput;
  AccountProviderProviderAccountIdCompoundUniqueInput: AccountProviderProviderAccountIdCompoundUniqueInput;
  Session: Session;
  SessionOrderByWithRelationInput: SessionOrderByWithRelationInput;
  SessionWhereUniqueInput: SessionWhereUniqueInput;
  AggregateAccount: AggregateAccount;
  AccountCountAggregate: AccountCountAggregate;
  AccountAvgAggregate: AccountAvgAggregate;
  Float: Scalars['Float'];
  AccountSumAggregate: AccountSumAggregate;
  AccountMinAggregate: AccountMinAggregate;
  AccountMaxAggregate: AccountMaxAggregate;
  AccountGroupBy: AccountGroupBy;
  AccountOrderByWithAggregationInput: AccountOrderByWithAggregationInput;
  AccountCountOrderByAggregateInput: AccountCountOrderByAggregateInput;
  AccountAvgOrderByAggregateInput: AccountAvgOrderByAggregateInput;
  AccountMaxOrderByAggregateInput: AccountMaxOrderByAggregateInput;
  AccountMinOrderByAggregateInput: AccountMinOrderByAggregateInput;
  AccountSumOrderByAggregateInput: AccountSumOrderByAggregateInput;
  AccountScalarWhereWithAggregatesInput: AccountScalarWhereWithAggregatesInput;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  NestedIntFilter: NestedIntFilter;
  StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
  NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
  IntNullableWithAggregatesFilter: IntNullableWithAggregatesFilter;
  NestedIntNullableWithAggregatesFilter: NestedIntNullableWithAggregatesFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  AggregateSession: AggregateSession;
  SessionCountAggregate: SessionCountAggregate;
  SessionMinAggregate: SessionMinAggregate;
  SessionMaxAggregate: SessionMaxAggregate;
  SessionGroupBy: SessionGroupBy;
  SessionOrderByWithAggregationInput: SessionOrderByWithAggregationInput;
  SessionCountOrderByAggregateInput: SessionCountOrderByAggregateInput;
  SessionMaxOrderByAggregateInput: SessionMaxOrderByAggregateInput;
  SessionMinOrderByAggregateInput: SessionMinOrderByAggregateInput;
  SessionScalarWhereWithAggregatesInput: SessionScalarWhereWithAggregatesInput;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  UserWhereUniqueInput: UserWhereUniqueInput;
  AggregateUser: AggregateUser;
  UserCountAggregate: UserCountAggregate;
  UserMinAggregate: UserMinAggregate;
  UserMaxAggregate: UserMaxAggregate;
  UserGroupBy: UserGroupBy;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  DateTimeNullableWithAggregatesFilter: DateTimeNullableWithAggregatesFilter;
  NestedDateTimeNullableWithAggregatesFilter: NestedDateTimeNullableWithAggregatesFilter;
  VerificationToken: VerificationToken;
  VerificationTokenWhereUniqueInput: VerificationTokenWhereUniqueInput;
  VerificationTokenIdentifierTokenCompoundUniqueInput: VerificationTokenIdentifierTokenCompoundUniqueInput;
  VerificationTokenWhereInput: VerificationTokenWhereInput;
  VerificationTokenOrderByWithRelationInput: VerificationTokenOrderByWithRelationInput;
  AggregateVerificationToken: AggregateVerificationToken;
  VerificationTokenCountAggregate: VerificationTokenCountAggregate;
  VerificationTokenMinAggregate: VerificationTokenMinAggregate;
  VerificationTokenMaxAggregate: VerificationTokenMaxAggregate;
  VerificationTokenGroupBy: VerificationTokenGroupBy;
  VerificationTokenOrderByWithAggregationInput: VerificationTokenOrderByWithAggregationInput;
  VerificationTokenCountOrderByAggregateInput: VerificationTokenCountOrderByAggregateInput;
  VerificationTokenMaxOrderByAggregateInput: VerificationTokenMaxOrderByAggregateInput;
  VerificationTokenMinOrderByAggregateInput: VerificationTokenMinOrderByAggregateInput;
  VerificationTokenScalarWhereWithAggregatesInput: VerificationTokenScalarWhereWithAggregatesInput;
  AccountCreateInput: AccountCreateInput;
  UserCreateNestedOneWithoutAccountsInput: UserCreateNestedOneWithoutAccountsInput;
  UserCreateWithoutAccountsInput: UserCreateWithoutAccountsInput;
  SessionCreateNestedManyWithoutUserInput: SessionCreateNestedManyWithoutUserInput;
  SessionCreateWithoutUserInput: SessionCreateWithoutUserInput;
  SessionCreateOrConnectWithoutUserInput: SessionCreateOrConnectWithoutUserInput;
  SessionCreateManyUserInputEnvelope: SessionCreateManyUserInputEnvelope;
  SessionCreateManyUserInput: SessionCreateManyUserInput;
  UserCreateOrConnectWithoutAccountsInput: UserCreateOrConnectWithoutAccountsInput;
  AffectedRowsOutput: AffectedRowsOutput;
  AccountCreateManyInput: AccountCreateManyInput;
  AccountUpdateInput: AccountUpdateInput;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  NullableIntFieldUpdateOperationsInput: NullableIntFieldUpdateOperationsInput;
  UserUpdateOneRequiredWithoutAccountsInput: UserUpdateOneRequiredWithoutAccountsInput;
  UserUpsertWithoutAccountsInput: UserUpsertWithoutAccountsInput;
  UserUpdateWithoutAccountsInput: UserUpdateWithoutAccountsInput;
  NullableDateTimeFieldUpdateOperationsInput: NullableDateTimeFieldUpdateOperationsInput;
  SessionUpdateManyWithoutUserInput: SessionUpdateManyWithoutUserInput;
  SessionUpsertWithWhereUniqueWithoutUserInput: SessionUpsertWithWhereUniqueWithoutUserInput;
  SessionUpdateWithoutUserInput: SessionUpdateWithoutUserInput;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  SessionUpdateWithWhereUniqueWithoutUserInput: SessionUpdateWithWhereUniqueWithoutUserInput;
  SessionUpdateManyWithWhereWithoutUserInput: SessionUpdateManyWithWhereWithoutUserInput;
  SessionScalarWhereInput: SessionScalarWhereInput;
  SessionUpdateManyMutationInput: SessionUpdateManyMutationInput;
  AccountUpdateManyMutationInput: AccountUpdateManyMutationInput;
  SessionCreateInput: SessionCreateInput;
  UserCreateNestedOneWithoutSessionsInput: UserCreateNestedOneWithoutSessionsInput;
  UserCreateWithoutSessionsInput: UserCreateWithoutSessionsInput;
  AccountCreateNestedManyWithoutUserInput: AccountCreateNestedManyWithoutUserInput;
  AccountCreateWithoutUserInput: AccountCreateWithoutUserInput;
  AccountCreateOrConnectWithoutUserInput: AccountCreateOrConnectWithoutUserInput;
  AccountCreateManyUserInputEnvelope: AccountCreateManyUserInputEnvelope;
  AccountCreateManyUserInput: AccountCreateManyUserInput;
  UserCreateOrConnectWithoutSessionsInput: UserCreateOrConnectWithoutSessionsInput;
  SessionCreateManyInput: SessionCreateManyInput;
  SessionUpdateInput: SessionUpdateInput;
  UserUpdateOneRequiredWithoutSessionsInput: UserUpdateOneRequiredWithoutSessionsInput;
  UserUpsertWithoutSessionsInput: UserUpsertWithoutSessionsInput;
  UserUpdateWithoutSessionsInput: UserUpdateWithoutSessionsInput;
  AccountUpdateManyWithoutUserInput: AccountUpdateManyWithoutUserInput;
  AccountUpsertWithWhereUniqueWithoutUserInput: AccountUpsertWithWhereUniqueWithoutUserInput;
  AccountUpdateWithoutUserInput: AccountUpdateWithoutUserInput;
  AccountUpdateWithWhereUniqueWithoutUserInput: AccountUpdateWithWhereUniqueWithoutUserInput;
  AccountUpdateManyWithWhereWithoutUserInput: AccountUpdateManyWithWhereWithoutUserInput;
  AccountScalarWhereInput: AccountScalarWhereInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  VerificationTokenCreateInput: VerificationTokenCreateInput;
  VerificationTokenCreateManyInput: VerificationTokenCreateManyInput;
  VerificationTokenUpdateInput: VerificationTokenUpdateInput;
  VerificationTokenUpdateManyMutationInput: VerificationTokenUpdateManyMutationInput;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  lastLoginForUser?: Resolver<Maybe<ResolversTypes['LastLoginForUser']>, ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'where'>>;
  findFirstAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, Partial<QueryfindFirstAccountArgs>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, Partial<QueryaccountsArgs>>;
  aggregateAccount?: Resolver<ResolversTypes['AggregateAccount'], ParentType, ContextType, Partial<QueryaggregateAccountArgs>>;
  groupByAccount?: Resolver<Array<ResolversTypes['AccountGroupBy']>, ParentType, ContextType, RequireFields<QuerygroupByAccountArgs, 'by'>>;
  session?: Resolver<Maybe<ResolversTypes['Session']>, ParentType, ContextType, RequireFields<QuerysessionArgs, 'where'>>;
  findFirstSession?: Resolver<Maybe<ResolversTypes['Session']>, ParentType, ContextType, Partial<QueryfindFirstSessionArgs>>;
  sessions?: Resolver<Array<ResolversTypes['Session']>, ParentType, ContextType, Partial<QuerysessionsArgs>>;
  aggregateSession?: Resolver<ResolversTypes['AggregateSession'], ParentType, ContextType, Partial<QueryaggregateSessionArgs>>;
  groupBySession?: Resolver<Array<ResolversTypes['SessionGroupBy']>, ParentType, ContextType, RequireFields<QuerygroupBySessionArgs, 'by'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'where'>>;
  findFirstUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryfindFirstUserArgs>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryusersArgs>>;
  aggregateUser?: Resolver<ResolversTypes['AggregateUser'], ParentType, ContextType, Partial<QueryaggregateUserArgs>>;
  groupByUser?: Resolver<Array<ResolversTypes['UserGroupBy']>, ParentType, ContextType, RequireFields<QuerygroupByUserArgs, 'by'>>;
  verificationToken?: Resolver<Maybe<ResolversTypes['VerificationToken']>, ParentType, ContextType, RequireFields<QueryverificationTokenArgs, 'where'>>;
  findFirstVerificationToken?: Resolver<Maybe<ResolversTypes['VerificationToken']>, ParentType, ContextType, Partial<QueryfindFirstVerificationTokenArgs>>;
  verificationTokens?: Resolver<Array<ResolversTypes['VerificationToken']>, ParentType, ContextType, Partial<QueryverificationTokensArgs>>;
  aggregateVerificationToken?: Resolver<ResolversTypes['AggregateVerificationToken'], ParentType, ContextType, Partial<QueryaggregateVerificationTokenArgs>>;
  groupByVerificationToken?: Resolver<Array<ResolversTypes['VerificationTokenGroupBy']>, ParentType, ContextType, RequireFields<QuerygroupByVerificationTokenArgs, 'by'>>;
}>;

export type LastLoginForUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LastLoginForUser'] = ResolversParentTypes['LastLoginForUser']> = ResolversObject<{
  lastLogin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationcreateAccountArgs, 'data'>>;
  createManyAccount?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationcreateManyAccountArgs, 'data'>>;
  deleteAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationdeleteAccountArgs, 'where'>>;
  updateAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationupdateAccountArgs, 'data' | 'where'>>;
  deleteManyAccount?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationdeleteManyAccountArgs>>;
  updateManyAccount?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationupdateManyAccountArgs, 'data'>>;
  upsertAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationupsertAccountArgs, 'where' | 'create' | 'update'>>;
  createSession?: Resolver<ResolversTypes['Session'], ParentType, ContextType, RequireFields<MutationcreateSessionArgs, 'data'>>;
  createManySession?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationcreateManySessionArgs, 'data'>>;
  deleteSession?: Resolver<Maybe<ResolversTypes['Session']>, ParentType, ContextType, RequireFields<MutationdeleteSessionArgs, 'where'>>;
  updateSession?: Resolver<Maybe<ResolversTypes['Session']>, ParentType, ContextType, RequireFields<MutationupdateSessionArgs, 'data' | 'where'>>;
  deleteManySession?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationdeleteManySessionArgs>>;
  updateManySession?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationupdateManySessionArgs, 'data'>>;
  upsertSession?: Resolver<ResolversTypes['Session'], ParentType, ContextType, RequireFields<MutationupsertSessionArgs, 'where' | 'create' | 'update'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'data'>>;
  createManyUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationcreateManyUserArgs, 'data'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'where'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'data' | 'where'>>;
  deleteManyUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationdeleteManyUserArgs>>;
  updateManyUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationupdateManyUserArgs, 'data'>>;
  upsertUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationupsertUserArgs, 'where' | 'create' | 'update'>>;
  createVerificationToken?: Resolver<ResolversTypes['VerificationToken'], ParentType, ContextType, RequireFields<MutationcreateVerificationTokenArgs, 'data'>>;
  createManyVerificationToken?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationcreateManyVerificationTokenArgs, 'data'>>;
  deleteVerificationToken?: Resolver<Maybe<ResolversTypes['VerificationToken']>, ParentType, ContextType, RequireFields<MutationdeleteVerificationTokenArgs, 'where'>>;
  updateVerificationToken?: Resolver<Maybe<ResolversTypes['VerificationToken']>, ParentType, ContextType, RequireFields<MutationupdateVerificationTokenArgs, 'data' | 'where'>>;
  deleteManyVerificationToken?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationdeleteManyVerificationTokenArgs>>;
  updateManyVerificationToken?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationupdateManyVerificationTokenArgs, 'data'>>;
  upsertVerificationToken?: Resolver<ResolversTypes['VerificationToken'], ParentType, ContextType, RequireFields<MutationupsertVerificationTokenArgs, 'where' | 'create' | 'update'>>;
}>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tokenType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  idToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['UserCount']>, ParentType, ContextType>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, Partial<UseraccountsArgs>>;
  sessions?: Resolver<Array<ResolversTypes['Session']>, ParentType, ContextType, Partial<UsersessionsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type UserCountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserCount'] = ResolversParentTypes['UserCount']> = ResolversObject<{
  accounts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sessions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregateAccount'] = ResolversParentTypes['AggregateAccount']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['AccountCountAggregate']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['AccountAvgAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['AccountSumAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['AccountMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['AccountMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCountAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountCountAggregate'] = ResolversParentTypes['AccountCountAggregate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerAccountId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  accessToken?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  idToken?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sessionState?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountAvgAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountAvgAggregate'] = ResolversParentTypes['AccountAvgAggregate']> = ResolversObject<{
  expiresAt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountSumAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountSumAggregate'] = ResolversParentTypes['AccountSumAggregate']> = ResolversObject<{
  expiresAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountMinAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountMinAggregate'] = ResolversParentTypes['AccountMinAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tokenType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  idToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountMaxAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountMaxAggregate'] = ResolversParentTypes['AccountMaxAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tokenType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  idToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountGroupByResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountGroupBy'] = ResolversParentTypes['AccountGroupBy']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tokenType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  idToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['AccountCountAggregate']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['AccountAvgAggregate']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['AccountSumAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['AccountMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['AccountMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateSessionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregateSession'] = ResolversParentTypes['AggregateSession']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['SessionCountAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['SessionMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['SessionMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionCountAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SessionCountAggregate'] = ResolversParentTypes['SessionCountAggregate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionMinAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SessionMinAggregate'] = ResolversParentTypes['SessionMinAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionMaxAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SessionMaxAggregate'] = ResolversParentTypes['SessionMaxAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionGroupByResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SessionGroupBy'] = ResolversParentTypes['SessionGroupBy']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['SessionCountAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['SessionMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['SessionMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMinAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMaxAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserGroupByResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserGroupBy'] = ResolversParentTypes['UserGroupBy']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VerificationToken'] = ResolversParentTypes['VerificationToken']> = ResolversObject<{
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateVerificationTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregateVerificationToken'] = ResolversParentTypes['AggregateVerificationToken']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['VerificationTokenCountAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['VerificationTokenMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['VerificationTokenMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenCountAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VerificationTokenCountAggregate'] = ResolversParentTypes['VerificationTokenCountAggregate']> = ResolversObject<{
  identifier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenMinAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VerificationTokenMinAggregate'] = ResolversParentTypes['VerificationTokenMinAggregate']> = ResolversObject<{
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenMaxAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VerificationTokenMaxAggregate'] = ResolversParentTypes['VerificationTokenMaxAggregate']> = ResolversObject<{
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenGroupByResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VerificationTokenGroupBy'] = ResolversParentTypes['VerificationTokenGroupBy']> = ResolversObject<{
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['VerificationTokenCountAggregate']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['VerificationTokenMinAggregate']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['VerificationTokenMaxAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AffectedRowsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AffectedRowsOutput'] = ResolversParentTypes['AffectedRowsOutput']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  LastLoginForUser?: LastLoginForUserResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  UserCount?: UserCountResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  AggregateAccount?: AggregateAccountResolvers<ContextType>;
  AccountCountAggregate?: AccountCountAggregateResolvers<ContextType>;
  AccountAvgAggregate?: AccountAvgAggregateResolvers<ContextType>;
  AccountSumAggregate?: AccountSumAggregateResolvers<ContextType>;
  AccountMinAggregate?: AccountMinAggregateResolvers<ContextType>;
  AccountMaxAggregate?: AccountMaxAggregateResolvers<ContextType>;
  AccountGroupBy?: AccountGroupByResolvers<ContextType>;
  AggregateSession?: AggregateSessionResolvers<ContextType>;
  SessionCountAggregate?: SessionCountAggregateResolvers<ContextType>;
  SessionMinAggregate?: SessionMinAggregateResolvers<ContextType>;
  SessionMaxAggregate?: SessionMaxAggregateResolvers<ContextType>;
  SessionGroupBy?: SessionGroupByResolvers<ContextType>;
  AggregateUser?: AggregateUserResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserGroupBy?: UserGroupByResolvers<ContextType>;
  VerificationToken?: VerificationTokenResolvers<ContextType>;
  AggregateVerificationToken?: AggregateVerificationTokenResolvers<ContextType>;
  VerificationTokenCountAggregate?: VerificationTokenCountAggregateResolvers<ContextType>;
  VerificationTokenMinAggregate?: VerificationTokenMinAggregateResolvers<ContextType>;
  VerificationTokenMaxAggregate?: VerificationTokenMaxAggregateResolvers<ContextType>;
  VerificationTokenGroupBy?: VerificationTokenGroupByResolvers<ContextType>;
  AffectedRowsOutput?: AffectedRowsOutputResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace ExpressServiceTemplateTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   * Get last login for user
   *
   * Equivalent to GET /lastLoginForUser
   */
  lastLoginForUser?: Maybe<LastLoginForUser>;
};

export type LastLoginForUser = {
  lastLogin?: Maybe<Scalars['String']>;
};

    }
    export type QueryExpressServiceTemplateSdk = {
  /** Get last login for user

Equivalent to GET /lastLoginForUser **/
  lastLoginForUser: InContextSdkMethod<ExpressServiceTemplateTypes.Query['lastLoginForUser'], {}, MeshContext>
};

export type MutationExpressServiceTemplateSdk = {

};

export type SubscriptionExpressServiceTemplateSdk = {

};


    export namespace PrismaTypegraphqlTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  account?: Maybe<Account>;
  findFirstAccount?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  groupByAccount: Array<AccountGroupBy>;
  session?: Maybe<Session>;
  findFirstSession?: Maybe<Session>;
  sessions: Array<Session>;
  aggregateSession: AggregateSession;
  groupBySession: Array<SessionGroupBy>;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
  groupByUser: Array<UserGroupBy>;
  verificationToken?: Maybe<VerificationToken>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
  aggregateVerificationToken: AggregateVerificationToken;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
};


export type QueryaccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryfindFirstAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
};


export type QueryaccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
};


export type QueryaggregateAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerygroupByAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerysessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QueryfindFirstSessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
};


export type QuerysessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
};


export type QueryaggregateSessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerygroupBySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryuserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryfindFirstUserArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
};


export type QueryusersArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
};


export type QueryaggregateUserArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerygroupByUserArgs = {
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryverificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryfindFirstVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
};


export type QueryverificationTokensArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
};


export type QueryaggregateVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerygroupByVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type Account = {
  id: Scalars['String'];
  userId: Scalars['String'];
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  token_type?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  user: User;
};

export type User = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  sessions: Array<Session>;
};


export type UseraccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
};


export type UsersessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
};

export type UserCount = {
  accounts: Scalars['Int'];
  sessions: Scalars['Int'];
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  id?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type StringFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type NestedStringFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
};

export type NestedStringNullableFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  image?: InputMaybe<StringNullableFilter>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
};

export type AccountOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type SortOrder =
  | 'asc'
  | 'desc';

export type UserOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export type AccountScalarFieldEnum =
  | 'id'
  | 'userId'
  | 'type'
  | 'provider'
  | 'providerAccountId'
  | 'refresh_token'
  | 'access_token'
  | 'expires_at'
  | 'token_type'
  | 'scope'
  | 'id_token'
  | 'session_state';

export type Session = {
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
  expires: Scalars['DateTime'];
  user: User;
};

export type SessionOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
};

export type SessionScalarFieldEnum =
  | 'id'
  | 'sessionToken'
  | 'userId'
  | 'expires';

export type AggregateAccount = {
  _count?: Maybe<AccountCountAggregate>;
  _avg?: Maybe<AccountAvgAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
};

export type AccountCountAggregate = {
  id: Scalars['Int'];
  userId: Scalars['Int'];
  type: Scalars['Int'];
  provider: Scalars['Int'];
  providerAccountId: Scalars['Int'];
  refresh_token: Scalars['Int'];
  access_token: Scalars['Int'];
  expires_at: Scalars['Int'];
  token_type: Scalars['Int'];
  scope: Scalars['Int'];
  id_token: Scalars['Int'];
  session_state: Scalars['Int'];
  _all: Scalars['Int'];
};

export type AccountAvgAggregate = {
  expires_at?: Maybe<Scalars['Float']>;
};

export type AccountSumAggregate = {
  expires_at?: Maybe<Scalars['Int']>;
};

export type AccountMinAggregate = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  token_type?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
};

export type AccountMaxAggregate = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  token_type?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
};

export type AccountGroupBy = {
  id: Scalars['String'];
  userId: Scalars['String'];
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  token_type?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  _count?: Maybe<AccountCountAggregate>;
  _avg?: Maybe<AccountAvgAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
};

export type AccountOrderByWithAggregationInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
};

export type AccountCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
};

export type AccountMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  _max?: InputMaybe<NestedStringFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  _max?: InputMaybe<NestedStringFilter>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
};

export type IntNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
};

export type NestedIntNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
};

export type AggregateSession = {
  _count?: Maybe<SessionCountAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
};

export type SessionCountAggregate = {
  id: Scalars['Int'];
  sessionToken: Scalars['Int'];
  userId: Scalars['Int'];
  expires: Scalars['Int'];
  _all: Scalars['Int'];
};

export type SessionMinAggregate = {
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
};

export type SessionMaxAggregate = {
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
};

export type SessionGroupBy = {
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
  expires: Scalars['DateTime'];
  _count?: Maybe<SessionCountAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
};

export type SessionOrderByWithAggregationInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
};

export type SessionCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type SessionMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type SessionMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type UserScalarFieldEnum =
  | 'id'
  | 'name'
  | 'email'
  | 'emailVerified'
  | 'image';

export type AggregateUser = {
  _count?: Maybe<UserCountAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _max?: Maybe<UserMaxAggregate>;
};

export type UserCountAggregate = {
  id: Scalars['Int'];
  name: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  image: Scalars['Int'];
  _all: Scalars['Int'];
};

export type UserMinAggregate = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
};

export type UserGroupBy = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  _count?: Maybe<UserCountAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _max?: Maybe<UserMaxAggregate>;
};

export type UserOrderByWithAggregationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
};

export type UserCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
};

export type UserMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
};

export type UserMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type DateTimeNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
};

export type VerificationToken = {
  identifier: Scalars['String'];
  token: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type VerificationTokenWhereUniqueInput = {
  token?: InputMaybe<Scalars['String']>;
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
};

export type VerificationTokenOrderByWithRelationInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type VerificationTokenScalarFieldEnum =
  | 'identifier'
  | 'token'
  | 'expires';

export type AggregateVerificationToken = {
  _count?: Maybe<VerificationTokenCountAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
};

export type VerificationTokenCountAggregate = {
  identifier: Scalars['Int'];
  token: Scalars['Int'];
  expires: Scalars['Int'];
  _all: Scalars['Int'];
};

export type VerificationTokenMinAggregate = {
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
};

export type VerificationTokenMaxAggregate = {
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
};

export type VerificationTokenGroupBy = {
  identifier: Scalars['String'];
  token: Scalars['String'];
  expires: Scalars['DateTime'];
  _count?: Maybe<VerificationTokenCountAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
};

export type VerificationTokenOrderByWithAggregationInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
};

export type VerificationTokenCountOrderByAggregateInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
};

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type Mutation = {
  createAccount: Account;
  createManyAccount: AffectedRowsOutput;
  deleteAccount?: Maybe<Account>;
  updateAccount?: Maybe<Account>;
  deleteManyAccount: AffectedRowsOutput;
  updateManyAccount: AffectedRowsOutput;
  upsertAccount: Account;
  createSession: Session;
  createManySession: AffectedRowsOutput;
  deleteSession?: Maybe<Session>;
  updateSession?: Maybe<Session>;
  deleteManySession: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  upsertSession: Session;
  createUser: User;
  createManyUser: AffectedRowsOutput;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  upsertUser: User;
  createVerificationToken: VerificationToken;
  createManyVerificationToken: AffectedRowsOutput;
  deleteVerificationToken?: Maybe<VerificationToken>;
  updateVerificationToken?: Maybe<VerificationToken>;
  deleteManyVerificationToken: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  upsertVerificationToken: VerificationToken;
};


export type MutationcreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationcreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationdeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationupdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationdeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationupdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationupsertAccountArgs = {
  where: AccountWhereUniqueInput;
  create: AccountCreateInput;
  update: AccountUpdateInput;
};


export type MutationcreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationcreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationdeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationupdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationdeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationupdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationupsertSessionArgs = {
  where: SessionWhereUniqueInput;
  create: SessionCreateInput;
  update: SessionUpdateInput;
};


export type MutationcreateUserArgs = {
  data: UserCreateInput;
};


export type MutationcreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationdeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationupdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationdeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationupdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationupsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationcreateVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
};


export type MutationcreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationdeleteVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type MutationupdateVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationdeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationupdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationupsertVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
  create: VerificationTokenCreateInput;
  update: VerificationTokenUpdateInput;
};

export type AccountCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  token_type?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutAccountsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
};

export type SessionCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type SessionCreateOrConnectWithoutUserInput = {
  where: SessionWhereUniqueInput;
  create: SessionCreateWithoutUserInput;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SessionCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type UserCreateOrConnectWithoutAccountsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutAccountsInput;
};

export type AffectedRowsOutput = {
  count: Scalars['Int'];
};

export type AccountCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  token_type?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
};

export type AccountUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  decrement?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
};

export type UserUpdateOneRequiredWithoutAccountsInput = {
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
  update?: InputMaybe<UserUpdateWithoutAccountsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  update: UserUpdateWithoutAccountsInput;
  create: UserCreateWithoutAccountsInput;
};

export type UserUpdateWithoutAccountsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type SessionUpdateManyWithoutUserInput = {
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  where: SessionWhereUniqueInput;
  update: SessionUpdateWithoutUserInput;
  create: SessionCreateWithoutUserInput;
};

export type SessionUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  where: SessionWhereUniqueInput;
  data: SessionUpdateWithoutUserInput;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  where: SessionScalarWhereInput;
  data: SessionUpdateManyMutationInput;
};

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
};

export type SessionUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SessionCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  expires: Scalars['DateTime'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutSessionsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
};

export type AccountCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  token_type?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  where: AccountWhereUniqueInput;
  create: AccountCreateWithoutUserInput;
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AccountCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  token_type?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type SessionUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsInput = {
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
  connect?: InputMaybe<UserWhereUniqueInput>;
  update?: InputMaybe<UserUpdateWithoutSessionsInput>;
};

export type UserUpsertWithoutSessionsInput = {
  update: UserUpdateWithoutSessionsInput;
  create: UserCreateWithoutSessionsInput;
};

export type UserUpdateWithoutSessionsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
};

export type AccountUpdateManyWithoutUserInput = {
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  where: AccountWhereUniqueInput;
  update: AccountUpdateWithoutUserInput;
  create: AccountCreateWithoutUserInput;
};

export type AccountUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  where: AccountWhereUniqueInput;
  data: AccountUpdateWithoutUserInput;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  where: AccountScalarWhereInput;
  data: AccountUpdateManyMutationInput;
};

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
};

export type UserCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
};

export type UserUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type VerificationTokenCreateInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type VerificationTokenCreateManyInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
  expires: Scalars['DateTime'];
};

export type VerificationTokenUpdateInput = {
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

    }
    export type QueryPrismaTypegraphqlSdk = {
  /** null **/
  account: InContextSdkMethod<PrismaTypegraphqlTypes.Query['account'], PrismaTypegraphqlTypes.QueryaccountArgs, MeshContext>,
  /** null **/
  findFirstAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Query['findFirstAccount'], PrismaTypegraphqlTypes.QueryfindFirstAccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<PrismaTypegraphqlTypes.Query['accounts'], PrismaTypegraphqlTypes.QueryaccountsArgs, MeshContext>,
  /** null **/
  aggregateAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Query['aggregateAccount'], PrismaTypegraphqlTypes.QueryaggregateAccountArgs, MeshContext>,
  /** null **/
  groupByAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Query['groupByAccount'], PrismaTypegraphqlTypes.QuerygroupByAccountArgs, MeshContext>,
  /** null **/
  session: InContextSdkMethod<PrismaTypegraphqlTypes.Query['session'], PrismaTypegraphqlTypes.QuerysessionArgs, MeshContext>,
  /** null **/
  findFirstSession: InContextSdkMethod<PrismaTypegraphqlTypes.Query['findFirstSession'], PrismaTypegraphqlTypes.QueryfindFirstSessionArgs, MeshContext>,
  /** null **/
  sessions: InContextSdkMethod<PrismaTypegraphqlTypes.Query['sessions'], PrismaTypegraphqlTypes.QuerysessionsArgs, MeshContext>,
  /** null **/
  aggregateSession: InContextSdkMethod<PrismaTypegraphqlTypes.Query['aggregateSession'], PrismaTypegraphqlTypes.QueryaggregateSessionArgs, MeshContext>,
  /** null **/
  groupBySession: InContextSdkMethod<PrismaTypegraphqlTypes.Query['groupBySession'], PrismaTypegraphqlTypes.QuerygroupBySessionArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<PrismaTypegraphqlTypes.Query['user'], PrismaTypegraphqlTypes.QueryuserArgs, MeshContext>,
  /** null **/
  findFirstUser: InContextSdkMethod<PrismaTypegraphqlTypes.Query['findFirstUser'], PrismaTypegraphqlTypes.QueryfindFirstUserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<PrismaTypegraphqlTypes.Query['users'], PrismaTypegraphqlTypes.QueryusersArgs, MeshContext>,
  /** null **/
  aggregateUser: InContextSdkMethod<PrismaTypegraphqlTypes.Query['aggregateUser'], PrismaTypegraphqlTypes.QueryaggregateUserArgs, MeshContext>,
  /** null **/
  groupByUser: InContextSdkMethod<PrismaTypegraphqlTypes.Query['groupByUser'], PrismaTypegraphqlTypes.QuerygroupByUserArgs, MeshContext>,
  /** null **/
  verificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Query['verificationToken'], PrismaTypegraphqlTypes.QueryverificationTokenArgs, MeshContext>,
  /** null **/
  findFirstVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Query['findFirstVerificationToken'], PrismaTypegraphqlTypes.QueryfindFirstVerificationTokenArgs, MeshContext>,
  /** null **/
  verificationTokens: InContextSdkMethod<PrismaTypegraphqlTypes.Query['verificationTokens'], PrismaTypegraphqlTypes.QueryverificationTokensArgs, MeshContext>,
  /** null **/
  aggregateVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Query['aggregateVerificationToken'], PrismaTypegraphqlTypes.QueryaggregateVerificationTokenArgs, MeshContext>,
  /** null **/
  groupByVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Query['groupByVerificationToken'], PrismaTypegraphqlTypes.QuerygroupByVerificationTokenArgs, MeshContext>
};

export type MutationPrismaTypegraphqlSdk = {
  /** null **/
  createAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['createAccount'], PrismaTypegraphqlTypes.MutationcreateAccountArgs, MeshContext>,
  /** null **/
  createManyAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['createManyAccount'], PrismaTypegraphqlTypes.MutationcreateManyAccountArgs, MeshContext>,
  /** null **/
  deleteAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['deleteAccount'], PrismaTypegraphqlTypes.MutationdeleteAccountArgs, MeshContext>,
  /** null **/
  updateAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['updateAccount'], PrismaTypegraphqlTypes.MutationupdateAccountArgs, MeshContext>,
  /** null **/
  deleteManyAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['deleteManyAccount'], PrismaTypegraphqlTypes.MutationdeleteManyAccountArgs, MeshContext>,
  /** null **/
  updateManyAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['updateManyAccount'], PrismaTypegraphqlTypes.MutationupdateManyAccountArgs, MeshContext>,
  /** null **/
  upsertAccount: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['upsertAccount'], PrismaTypegraphqlTypes.MutationupsertAccountArgs, MeshContext>,
  /** null **/
  createSession: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['createSession'], PrismaTypegraphqlTypes.MutationcreateSessionArgs, MeshContext>,
  /** null **/
  createManySession: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['createManySession'], PrismaTypegraphqlTypes.MutationcreateManySessionArgs, MeshContext>,
  /** null **/
  deleteSession: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['deleteSession'], PrismaTypegraphqlTypes.MutationdeleteSessionArgs, MeshContext>,
  /** null **/
  updateSession: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['updateSession'], PrismaTypegraphqlTypes.MutationupdateSessionArgs, MeshContext>,
  /** null **/
  deleteManySession: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['deleteManySession'], PrismaTypegraphqlTypes.MutationdeleteManySessionArgs, MeshContext>,
  /** null **/
  updateManySession: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['updateManySession'], PrismaTypegraphqlTypes.MutationupdateManySessionArgs, MeshContext>,
  /** null **/
  upsertSession: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['upsertSession'], PrismaTypegraphqlTypes.MutationupsertSessionArgs, MeshContext>,
  /** null **/
  createUser: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['createUser'], PrismaTypegraphqlTypes.MutationcreateUserArgs, MeshContext>,
  /** null **/
  createManyUser: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['createManyUser'], PrismaTypegraphqlTypes.MutationcreateManyUserArgs, MeshContext>,
  /** null **/
  deleteUser: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['deleteUser'], PrismaTypegraphqlTypes.MutationdeleteUserArgs, MeshContext>,
  /** null **/
  updateUser: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['updateUser'], PrismaTypegraphqlTypes.MutationupdateUserArgs, MeshContext>,
  /** null **/
  deleteManyUser: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['deleteManyUser'], PrismaTypegraphqlTypes.MutationdeleteManyUserArgs, MeshContext>,
  /** null **/
  updateManyUser: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['updateManyUser'], PrismaTypegraphqlTypes.MutationupdateManyUserArgs, MeshContext>,
  /** null **/
  upsertUser: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['upsertUser'], PrismaTypegraphqlTypes.MutationupsertUserArgs, MeshContext>,
  /** null **/
  createVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['createVerificationToken'], PrismaTypegraphqlTypes.MutationcreateVerificationTokenArgs, MeshContext>,
  /** null **/
  createManyVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['createManyVerificationToken'], PrismaTypegraphqlTypes.MutationcreateManyVerificationTokenArgs, MeshContext>,
  /** null **/
  deleteVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['deleteVerificationToken'], PrismaTypegraphqlTypes.MutationdeleteVerificationTokenArgs, MeshContext>,
  /** null **/
  updateVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['updateVerificationToken'], PrismaTypegraphqlTypes.MutationupdateVerificationTokenArgs, MeshContext>,
  /** null **/
  deleteManyVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['deleteManyVerificationToken'], PrismaTypegraphqlTypes.MutationdeleteManyVerificationTokenArgs, MeshContext>,
  /** null **/
  updateManyVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['updateManyVerificationToken'], PrismaTypegraphqlTypes.MutationupdateManyVerificationTokenArgs, MeshContext>,
  /** null **/
  upsertVerificationToken: InContextSdkMethod<PrismaTypegraphqlTypes.Mutation['upsertVerificationToken'], PrismaTypegraphqlTypes.MutationupsertVerificationTokenArgs, MeshContext>
};

export type SubscriptionPrismaTypegraphqlSdk = {

};

export type ExpressServiceTemplateContext = {
      ["express-service-template"]: { Query: QueryExpressServiceTemplateSdk, Mutation: MutationExpressServiceTemplateSdk, Subscription: SubscriptionExpressServiceTemplateSdk },
      ["fetch"]: typeof fetch
    };

export type PrismaTypegraphqlContext = {
      ["prisma-typegraphql"]: { Query: QueryPrismaTypegraphqlSdk, Mutation: MutationPrismaTypegraphqlSdk, Subscription: SubscriptionPrismaTypegraphqlSdk },
      
    };

export type MeshContext = ExpressServiceTemplateContext & PrismaTypegraphqlContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                    additionalPackagePrefixes: [],
                    initialLoggerPrefix: "🕸️  Mesh",
                  });
                }
              

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));