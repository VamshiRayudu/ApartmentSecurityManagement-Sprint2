import { GuardSalary } from "./guardsalary";
import { GuardShift } from "./guardshift";

export class Guard {
    id:number=0;
    userName: string = "";
    password: string = "";
    role: string = "";
    emailId: string = "";
    mobileNumber: number = 0;
    name: string = "";
    guardSalaries!: GuardSalary[];
    guardShift!: GuardShift;
}