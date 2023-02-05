import { Field, InputType } from "@nestjs/graphql";
import { ExerciseInputType } from "./exercise.input-type";

@InputType()
export class AddWorkoutInputType {

  @Field()
  name: string;

  @Field(() => [ExerciseInputType], { nullable: true })
  exercises?: ExerciseInputType[];

}
