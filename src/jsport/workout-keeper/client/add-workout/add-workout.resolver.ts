import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { WorkoutKeeperController } from "../../server/workout-keeper.controller";
import { AddWorkoutRequest } from "./add-workout.request";
import { AddWorkoutResponse } from "./add-workout.response";

@Resolver()
export class AddWorkoutResolver {
  constructor(
    private readonly workoutKeeperController: WorkoutKeeperController
  ) {
  }

  @Mutation(() => AddWorkoutResponse)
  async addWorkout(@Args() request: AddWorkoutRequest): Promise<AddWorkoutResponse> {
    const result = await this.workoutKeeperController.addWorkout(request)
    return new AddWorkoutResponse(result);
  }

}
