import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RemoveWorkoutResponse {

  @Field()
  success: boolean;

  constructor(props: RemoveWorkoutResponse) {
    this.success = props.success;
  }
}
