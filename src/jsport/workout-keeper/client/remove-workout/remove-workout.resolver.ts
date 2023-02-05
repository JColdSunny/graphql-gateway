import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { WorkoutKeeperController } from "../../server/workout-keeper.controller";
import { RemoveWorkoutResponse } from "./remove-workout.response";
import { RemoveWorkoutRequest } from "./remove-workout.request";

@Resolver()
export class RemoveWorkoutResolver {
  constructor(private readonly workoutKeeperController: WorkoutKeeperController) {
  }

  @Mutation(() => RemoveWorkoutResponse)
  async removeWorkout(@Args() request: RemoveWorkoutRequest): Promise<RemoveWorkoutResponse> {
    await this.workoutKeeperController.removeWorkout(request.input.workoutId);
    return new RemoveWorkoutResponse({ success: true });
  }
}
