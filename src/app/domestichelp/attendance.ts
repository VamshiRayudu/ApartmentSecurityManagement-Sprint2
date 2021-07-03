export class Attendance {
    dateOfAttendance!: Date;
    inTime!: Date ;
    outTime!: Date ;
    updatedByGuardId: number = 0;
    attended: boolean = false;
}