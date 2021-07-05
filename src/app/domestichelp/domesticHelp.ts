import { FlatDetails } from "../flatdetails/flatdetails";
import { Attendance } from "./attendance";

enum DomesticHelpType {
    COOKING,
    WASHING,
    PLUMBING,
    ELECTRICITY,
    HOUSEKEEPING
}

export class DomesticHelp{
    id:number=0;
    attendance!: Attendance[];
    helpType!: DomesticHelpType;
    name: string="";
    aadharId: string="";
    mobileNumber: number=0;
    flatDetails!: FlatDetails;
}