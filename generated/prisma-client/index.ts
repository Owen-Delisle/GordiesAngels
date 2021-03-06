// Code generated by Prisma (prisma@1.28.5). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  pullRequest: (where?: PullRequestWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  pullRequest: (where: PullRequestWhereUniqueInput) => PullRequestPromise;
  pullRequests: (
    args?: {
      where?: PullRequestWhereInput;
      orderBy?: PullRequestOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<PullRequest>;
  pullRequestsConnection: (
    args?: {
      where?: PullRequestWhereInput;
      orderBy?: PullRequestOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PullRequestConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPullRequest: (data: PullRequestCreateInput) => PullRequestPromise;
  updatePullRequest: (
    args: { data: PullRequestUpdateInput; where: PullRequestWhereUniqueInput }
  ) => PullRequestPromise;
  updateManyPullRequests: (
    args: {
      data: PullRequestUpdateManyMutationInput;
      where?: PullRequestWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertPullRequest: (
    args: {
      where: PullRequestWhereUniqueInput;
      create: PullRequestCreateInput;
      update: PullRequestUpdateInput;
    }
  ) => PullRequestPromise;
  deletePullRequest: (where: PullRequestWhereUniqueInput) => PullRequestPromise;
  deleteManyPullRequests: (
    where?: PullRequestWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  pullRequest: (
    where?: PullRequestSubscriptionWhereInput
  ) => PullRequestSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PullRequestOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "longitude_ASC"
  | "longitude_DESC"
  | "latitude_ASC"
  | "latitude_DESC"
  | "userId_ASC"
  | "userId_DESC"
  | "bid_ASC"
  | "bid_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "firstname_ASC"
  | "firstname_DESC"
  | "lastname_ASC"
  | "lastname_DESC"
  | "password_ASC"
  | "password_DESC";

export interface UserCreateInput {
  email?: String;
  firstname?: String;
  lastname?: String;
  password?: String;
}

export interface PullRequestUpdateInput {
  longitude?: Float;
  latitude?: Float;
  userId?: String;
  bid?: Float;
}

export type PullRequestWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PullRequestWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  longitude?: Float;
  longitude_not?: Float;
  longitude_in?: Float[] | Float;
  longitude_not_in?: Float[] | Float;
  longitude_lt?: Float;
  longitude_lte?: Float;
  longitude_gt?: Float;
  longitude_gte?: Float;
  latitude?: Float;
  latitude_not?: Float;
  latitude_in?: Float[] | Float;
  latitude_not_in?: Float[] | Float;
  latitude_lt?: Float;
  latitude_lte?: Float;
  latitude_gt?: Float;
  latitude_gte?: Float;
  userId?: String;
  userId_not?: String;
  userId_in?: String[] | String;
  userId_not_in?: String[] | String;
  userId_lt?: String;
  userId_lte?: String;
  userId_gt?: String;
  userId_gte?: String;
  userId_contains?: String;
  userId_not_contains?: String;
  userId_starts_with?: String;
  userId_not_starts_with?: String;
  userId_ends_with?: String;
  userId_not_ends_with?: String;
  bid?: Float;
  bid_not?: Float;
  bid_in?: Float[] | Float;
  bid_not_in?: Float[] | Float;
  bid_lt?: Float;
  bid_lte?: Float;
  bid_gt?: Float;
  bid_gte?: Float;
  AND?: PullRequestWhereInput[] | PullRequestWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  firstname?: String;
  firstname_not?: String;
  firstname_in?: String[] | String;
  firstname_not_in?: String[] | String;
  firstname_lt?: String;
  firstname_lte?: String;
  firstname_gt?: String;
  firstname_gte?: String;
  firstname_contains?: String;
  firstname_not_contains?: String;
  firstname_starts_with?: String;
  firstname_not_starts_with?: String;
  firstname_ends_with?: String;
  firstname_not_ends_with?: String;
  lastname?: String;
  lastname_not?: String;
  lastname_in?: String[] | String;
  lastname_not_in?: String[] | String;
  lastname_lt?: String;
  lastname_lte?: String;
  lastname_gt?: String;
  lastname_gte?: String;
  lastname_contains?: String;
  lastname_not_contains?: String;
  lastname_starts_with?: String;
  lastname_not_starts_with?: String;
  lastname_ends_with?: String;
  lastname_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface PullRequestCreateInput {
  longitude: Float;
  latitude: Float;
  userId: String;
  bid: Float;
}

export interface PullRequestSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PullRequestWhereInput;
  AND?: PullRequestSubscriptionWhereInput[] | PullRequestSubscriptionWhereInput;
}

export interface PullRequestUpdateManyMutationInput {
  longitude?: Float;
  latitude?: Float;
  userId?: String;
  bid?: Float;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpdateInput {
  email?: String;
  firstname?: String;
  lastname?: String;
  password?: String;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  firstname?: String;
  lastname?: String;
  password?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  email?: String;
  firstname?: String;
  lastname?: String;
  password?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  firstname: () => Promise<String>;
  lastname: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  firstname: () => Promise<AsyncIterator<String>>;
  lastname: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface PullRequestConnection {
  pageInfo: PageInfo;
  edges: PullRequestEdge[];
}

export interface PullRequestConnectionPromise
  extends Promise<PullRequestConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PullRequestEdge>>() => T;
  aggregate: <T = AggregatePullRequestPromise>() => T;
}

export interface PullRequestConnectionSubscription
  extends Promise<AsyncIterator<PullRequestConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PullRequestEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePullRequestSubscription>() => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregatePullRequest {
  count: Int;
}

export interface AggregatePullRequestPromise
  extends Promise<AggregatePullRequest>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePullRequestSubscription
  extends Promise<AsyncIterator<AggregatePullRequest>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PullRequestSubscriptionPayload {
  mutation: MutationType;
  node: PullRequest;
  updatedFields: String[];
  previousValues: PullRequestPreviousValues;
}

export interface PullRequestSubscriptionPayloadPromise
  extends Promise<PullRequestSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PullRequestPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PullRequestPreviousValuesPromise>() => T;
}

export interface PullRequestSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PullRequestSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PullRequestSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PullRequestPreviousValuesSubscription>() => T;
}

export interface PullRequestPreviousValues {
  id: ID_Output;
  longitude: Float;
  latitude: Float;
  userId: String;
  bid: Float;
}

export interface PullRequestPreviousValuesPromise
  extends Promise<PullRequestPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  longitude: () => Promise<Float>;
  latitude: () => Promise<Float>;
  userId: () => Promise<String>;
  bid: () => Promise<Float>;
}

export interface PullRequestPreviousValuesSubscription
  extends Promise<AsyncIterator<PullRequestPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  longitude: () => Promise<AsyncIterator<Float>>;
  latitude: () => Promise<AsyncIterator<Float>>;
  userId: () => Promise<AsyncIterator<String>>;
  bid: () => Promise<AsyncIterator<Float>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PullRequestEdge {
  node: PullRequest;
  cursor: String;
}

export interface PullRequestEdgePromise
  extends Promise<PullRequestEdge>,
    Fragmentable {
  node: <T = PullRequestPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PullRequestEdgeSubscription
  extends Promise<AsyncIterator<PullRequestEdge>>,
    Fragmentable {
  node: <T = PullRequestSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  email?: String;
  firstname?: String;
  lastname?: String;
  password?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  firstname: () => Promise<String>;
  lastname: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  firstname: () => Promise<AsyncIterator<String>>;
  lastname: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface PullRequest {
  id: ID_Output;
  longitude: Float;
  latitude: Float;
  userId: String;
  bid: Float;
}

export interface PullRequestPromise extends Promise<PullRequest>, Fragmentable {
  id: () => Promise<ID_Output>;
  longitude: () => Promise<Float>;
  latitude: () => Promise<Float>;
  userId: () => Promise<String>;
  bid: () => Promise<Float>;
}

export interface PullRequestSubscription
  extends Promise<AsyncIterator<PullRequest>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  longitude: () => Promise<AsyncIterator<Float>>;
  latitude: () => Promise<AsyncIterator<Float>>;
  userId: () => Promise<AsyncIterator<String>>;
  bid: () => Promise<AsyncIterator<Float>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "PullRequest",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
