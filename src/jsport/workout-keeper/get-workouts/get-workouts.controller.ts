import { Injectable } from "@nestjs/common";
import { Workout } from "../models/workout";

@Injectable()
export class GetWorkoutsController {
  constructor() {
  }

  async getWorkouts(): Promise<Workout[]> {
    const response = await fetch("http://localhost:8080/api/workouts", {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return await response.json();
  }

}
