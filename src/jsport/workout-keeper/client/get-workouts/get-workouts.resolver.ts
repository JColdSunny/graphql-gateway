import { Query, Resolver } from "@nestjs/graphql";
import { GetWorkoutsResponse } from "./get-workouts.response";
import { WorkoutKeeperController } from "../../server/workout-keeper.controller";

@Resolver()
export class GetWorkoutsResolver {
  constructor(
    private readonly getWorkoutsController: WorkoutKeeperController
  ) {
  }

  @Query(() => GetWorkoutsResponse)
  async getWorkouts(): Promise<GetWorkoutsResponse> {
    const result = await this.getWorkoutsController.getWorkouts();
    return new GetWorkoutsResponse(result);
  }

}
