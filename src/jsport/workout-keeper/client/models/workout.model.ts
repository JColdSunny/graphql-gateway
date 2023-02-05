import { Field, ObjectType } from "@nestjs/graphql";
import { ExerciseModel } from "./exercise.model";

@ObjectType("Workout")
export class WorkoutModel {

  @Field()
  workoutId: string;

  @Field()
  name: string;

  @Field(() => [ExerciseModel], { nullable: true })
  exercises?: ExerciseModel[];

}
