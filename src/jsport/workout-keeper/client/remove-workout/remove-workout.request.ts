import { ArgsType, Field } from "@nestjs/graphql";
import { RemoveWorkoutInputType } from "../models/input-type/remove-workout.input-type";

@ArgsType()
export class RemoveWorkoutRequest {

  @Field(() => RemoveWorkoutInputType)
  input: RemoveWorkoutInputType;

}
