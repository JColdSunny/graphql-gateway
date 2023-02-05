import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SetInputType {

  @Field()
  repeats: number;

  @Field()
  measureUnits: string;

}
