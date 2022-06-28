import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('VerificationTokenMaxAggregate', {
  isAbstract: true,
})
export class VerificationTokenMaxAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  identifier!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  token!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  expires!: Date | null;
}
