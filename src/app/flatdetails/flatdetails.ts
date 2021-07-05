import { Owner } from "../owner/owner";
import { FlatRent } from "./flatRent";
import { Rental } from "./rental";

export class FlatDetails{
    flatNumber: number=0;
    flatRent!: FlatRent;
    isRented: boolean | undefined;
    owner!: Owner;
    rentals!: Rental;
  
}