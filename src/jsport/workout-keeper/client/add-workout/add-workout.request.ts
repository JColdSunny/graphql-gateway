import { ArgsType, Field } from "@nestjs/graphql";
import { AddWorkoutInputType } from "../models/input-type/add-workout.input-type";

@ArgsType()
export class AddWorkoutRequest {

  @Field(() => AddWorkoutInputType)
  input: AddWorkoutInputType;

}

