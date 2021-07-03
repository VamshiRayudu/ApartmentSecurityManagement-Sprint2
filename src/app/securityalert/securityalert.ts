import { Admin } from "../admin/admin";
import { Guard } from "../guard/guard";

export class SecurityAlert {
    id:number=0;
    alert:string="";
    dateTimeOfAlert!: Date;
    message:string="";
    admin!: Admin;
    guard!: Guard;
}