import { Field, ObjectType } from "@nestjs/graphql";
import { Workout } from "../models/workout";

@ObjectType("GetWorkouts")
export class GetWorkoutsResponse {

  @Field(() => [Workout])
  workouts: Workout[];

  constructor(props: GetWorkoutsResponse) {
    this.workouts = props.workouts;
  }

}
