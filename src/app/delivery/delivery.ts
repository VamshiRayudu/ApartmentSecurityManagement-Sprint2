import { FlatDetails } from "../flatdetails/flatdetails";
import { Guard } from "../guard/guard";

enum DeliveryStatus {
    RECEIVED, 
    PICKEDUP, 
    NOTPICKEDUP
}

export class Delivery{
    deliveryId: number=0;
    flatDetails!: FlatDetails;
    deliveryDateTime!: Date;
    status!: DeliveryStatus;
    guard!: Guard;
  
}