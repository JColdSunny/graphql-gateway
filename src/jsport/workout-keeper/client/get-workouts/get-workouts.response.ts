import { Field, ObjectType } from "@nestjs/graphql";
import { WorkoutModel } from "../models/workout.model";

@ObjectType()
export class GetWorkoutsResponse {

  @Field(() => [WorkoutModel])
  workouts: WorkoutModel[];

  constructor(props: GetWorkoutsResponse) {
    this.workouts = props.workouts;
  }

}
