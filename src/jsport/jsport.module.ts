import { Module } from "@nestjs/common";
import { GetWorkoutsController } from "./workout-keeper/get-workouts/get-workouts.controller";
import { GetWorkoutsResolver } from "./workout-keeper/get-workouts/get-workouts.resolver";

@Module({
  providers: [
    GetWorkoutsController,
    GetWorkoutsResolver
  ]
})
export class JSportModule {
}
