import { Injectable } from "@nestjs/common";
import { GetWorkoutsEntity } from "./get-workouts/get-workouts.entity";
import { AddWorkoutEntity } from "./add-workout/add-workout.entity";
import { AddWorkoutRequest } from "../client/add-workout/add-workout.request";
import { UpdateWorkoutRequest } from "../client/update-workout/update-workout.request";
import { UpdateWorkoutEntity } from "./update-workout/update-workout.entity";

@Injectable()
export class WorkoutKeeperController {
  constructor() {
  }

  async getWorkouts(): Promise<GetWorkoutsEntity> {
    const response = await fetch("http://localhost:8080/api/workouts", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    });
    return await response.json();
  }

  async addWorkout(request: AddWorkoutRequest): Promise<AddWorkoutEntity> {
    const response = await fetch("http://localhost:8080/api/workouts", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ workout: request.input })
    });
    return await response.json();
  }

  async updateWorkout(request: UpdateWorkoutRequest): Promise<UpdateWorkoutEntity> {
    const response = await fetch("http://localhost:8080/api/workouts", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({ workout: request.input })
    });
    return await response.json();
  }

  async removeWorkout(workoutId: string): Promise<void> {
    await fetch(`http://localhost:8080/api/workouts/${workoutId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    });
  }
}
