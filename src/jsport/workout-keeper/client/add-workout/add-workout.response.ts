import { Field, ObjectType } from "@nestjs/graphql";
import { WorkoutModel } from "../models/workout.model";

@ObjectType()
export class AddWorkoutResponse {

  @Field(() => WorkoutModel)
  workout: WorkoutModel;

  constructor(props: AddWorkoutResponse) {
    this.workout = props.workout;
  }
}
