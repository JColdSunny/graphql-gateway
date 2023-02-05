import { Field, InputType } from "@nestjs/graphql";
import { ExerciseInputType } from "./exercise.input-type";

@InputType()
export class UpdateWorkoutInputType {

  @Field()
  workoutId: string;

  @Field()
  name: string;

  @Field(() => [ExerciseInputType], { nullable: true })
  exercises?: ExerciseInputType[];

}
