import { Field, InputType } from "@nestjs/graphql";
import { SetInputType } from "./set.input-type";

@InputType()
export class ExerciseInputType {

  @Field()
  exerciseId: string;

  @Field()
  name: string;

  @Field(() => [SetInputType], { nullable: true })
  sets?: SetInputType[];

}
