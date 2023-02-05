import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RemoveWorkoutInputType {

  @Field()
  workoutId: string;

}
