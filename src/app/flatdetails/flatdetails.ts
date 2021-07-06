import { Owner } from "../owner/owner";
import { FlatRent } from "./flatRent";
import { Rental } from "./rental";

export class FlatDetails{
    flatNumber: number=0;
    floorNumber: number=0;
    flatRent!: FlatRent;
    isRented: boolean=false;
    owner!: Owner;
    rentals!: Rental;
  
}