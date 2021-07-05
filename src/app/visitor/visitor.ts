import { FlatDetails } from "../flatdetails/flatdetails";
import { Guard } from "../guard/guard";

export class Visitor{
    id: number=0;
    visitorName: string="";
    mobileNumber: string="";
    flatDetails!: FlatDetails;
    inTime!: Date;
    outTime!: Date;
    guard!: Guard;
  
}