import { FlatDetails } from "../flatdetails/flatdetails";
import { Owner } from "../owner/owner";
import { vehicleUpdate } from "./vehicleUpdate";

export class Vehicle{
    id:number=0;
    numberPlate:string="";
    vehicleColour:string="";
    flatDetails!: FlatDetails;
    owner!: Owner;
    vehicleUpdates!: vehicleUpdate;
}