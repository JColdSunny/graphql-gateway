import { Module } from "@nestjs/common";
import { WorkoutKeeperController } from "./workout-keeper/server/workout-keeper.controller";
import { GetWorkoutsResolver } from "./workout-keeper/client/get-workouts/get-workouts.resolver";
import { AddWorkoutResolver } from "./workout-keeper/client/add-workout/add-workout.resolver";
import { RemoveWorkoutResolver } from "./workout-keeper/client/remove-workout/remove-workout.resolver";
import { UpdateWorkoutResolver } from "./workout-keeper/client/update-workout/update-workout.resolver";

@Module({
  providers: [
    WorkoutKeeperController,
    GetWorkoutsResolver,
    AddWorkoutResolver,
    UpdateWorkoutResolver,
    RemoveWorkoutResolver
  ]
})
export class JSportModule {
}
