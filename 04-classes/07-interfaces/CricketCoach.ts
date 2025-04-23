import { Coach } from "./Coach";

export class CricketCoach implements Coach {
    getDailyWorkout(): string {     
        return "Practice your spin bowling for 15 minutes.";
    }
    
}