import { Field, ObjectType } from "@nestjs/graphql";
import { WorkoutModel } from "../models/workout.model";

@ObjectType()
export class UpdateWorkoutResponse {

  @Field(() => WorkoutModel)
  workout: WorkoutModel;

  constructor(props: UpdateWorkoutResponse) {
    this.workout = props.workout;
  }
}
