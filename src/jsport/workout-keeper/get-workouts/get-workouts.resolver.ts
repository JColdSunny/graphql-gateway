import { Query, Resolver } from "@nestjs/graphql";
import { GetWorkoutsResponse } from "./get-workouts.response";
import { GetWorkoutsController } from "./get-workouts.controller";

@Resolver()
export class GetWorkoutsResolver {
  constructor(
    private readonly getWorkoutsController: GetWorkoutsController
  ) {
  }

  @Query(() => GetWorkoutsResponse)
  async getWorkouts(): Promise<GetWorkoutsResponse> {
    const workouts = await this.getWorkoutsController.getWorkouts();
    return new GetWorkoutsResponse({ workouts });
  }

}
