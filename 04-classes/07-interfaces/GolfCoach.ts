import { Coach } from "./Coach";

export class GolfCoach implements Coach {
	getDailyWorkout(): string {
		return "Practice your putting skills for 30 minutes.";
	}
}