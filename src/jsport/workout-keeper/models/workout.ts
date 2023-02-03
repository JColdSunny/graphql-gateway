import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Workout {

  @Field()
  workoutId: string;

  @Field()
  name: string;

}
