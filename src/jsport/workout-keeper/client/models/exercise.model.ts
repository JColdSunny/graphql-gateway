import { Field, ObjectType } from "@nestjs/graphql";
import { SetModel } from "./set.model";

@ObjectType("Exercise")
export class ExerciseModel {

  @Field()
  exerciseId: string;

  @Field()
  name: string;

  @Field(() => [SetModel], { nullable: true })
  sets?: SetModel[];

}
