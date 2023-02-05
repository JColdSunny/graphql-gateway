import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("Set")
export class SetModel {

  @Field()
  repeats: number;

  @Field()
  measureUnits: string;

}
