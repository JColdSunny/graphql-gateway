import { ArgsType, Field } from "@nestjs/graphql";
import { UpdateWorkoutInputType } from "../models/input-type/update-workout.input-type";

@ArgsType()
export class UpdateWorkoutRequest {

  @Field(() => UpdateWorkoutInputType)
  input: UpdateWorkoutInputType;

}
