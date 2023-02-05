import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { WorkoutKeeperController } from "../../server/workout-keeper.controller";
import { UpdateWorkoutResponse } from "./update-workout.response";
import { UpdateWorkoutRequest } from "./update-workout.request";

@Resolver()
export class UpdateWorkoutResolver {
  constructor(private readonly workoutKeeperController: WorkoutKeeperController) {
  }

  @Mutation(() => UpdateWorkoutResponse)
  async updateWorkout(@Args() request: UpdateWorkoutRequest): Promise<UpdateWorkoutResponse> {
    const result = await this.workoutKeeperController.updateWorkout(request);
    return new UpdateWorkoutResponse(result);
  }
}
