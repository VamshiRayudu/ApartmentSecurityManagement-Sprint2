import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditAdminComponent } from './admin/edit-admin.component';
import { ListAdminComponent } from './admin/list-admin.component';
import { AddDeliveryComponent } from './delivery/add-delivery.component';
import { EditDeliveryComponent } from './delivery/edit-delivery.component';
import { ListDeliveryComponent } from './delivery/list-delivery.component';
import { AddDomestichelpComponent } from './domestichelp/add-domestichelp.component';
import { AddDomestichelpattendanceComponent } from './domestichelp/add-domestichelpattendance.component';
import { DomestichelpComponent } from './domestichelp/domestichelp.component';
import { EditDomestichelpComponent } from './domestichelp/edit-domestichelp.component';
import { ListDomestichelpComponent } from './domestichelp/list-domestichelp.component';
import { ListDomestichelpattendanceComponent } from './domestichelp/list-domestichelpattendance.component';
import { AddFlatdetailsComponent } from './flatdetails/add-flatdetails.component';
import { EditFlatdetailsComponent } from './flatdetails/edit-flatdetails.component';
import { FlatdetailsComponent } from './flatdetails/flatdetails.component';
import { ListFlatdetailsComponent } from './flatdetails/list-flatdetails.component';
import { AddGuardattendanceComponent } from './guard/add-guardattendance.component';
import { AddGuardsalaryComponent } from './guard/add-guardsalary.component';
import { AddGuardshiftComponent } from './guard/add-guardshift.component';
import { EditGuardComponent } from './guard/edit-guard.component';
import { GuardComponent } from './guard/guard.component';
import { ListGuardComponent } from './guard/list-guard.component';
import { ListGuardattendanceComponent } from './guard/list-guardattendance.component';
import { ViewGuardsalaryComponent } from './guard/view-guardsalary.component';
import { ViewGuardshiftComponent } from './guard/view-guardshift.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EditOwnerComponent } from './owner/edit-owner.component';
import { ListOwnerComponent } from './owner/list-owner.component';
import { OwnerComponent } from './owner/owner.component';
import { RegisterComponent } from './register/register.component';
import { AddSecurityalertComponent } from './securityalert/add-securityalert.component';
import { EditSecurityalertComponent } from './securityalert/edit-securityalert.component';
import { ListSecurityalertComponent } from './securityalert/list-securityalert.component';
import { SecurityalertComponent } from './securityalert/securityalert.component';
import { AuthGaurdService } from './shared/auth-gaurd.service';
import { AddVehicleComponent } from './vehicle/add-vehicle.component';
import { AddVehicleupdateComponent } from './vehicle/add-vehicleupdate.component';
import { ListVehicleComponent } from './vehicle/list-vehicle.component';
import { ListVehicleUpdateComponent } from './vehicle/list-vehicleupdate.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddVisitorComponent } from './visitor/add-visitor.component';
import { ListVisitorComponent } from './visitor/list-visitor.component';
import { UpdateVisitorComponent } from './visitor/update-visitor.component';

const routes: Routes = [
  {path: 'register',
   component: RegisterComponent},
   {path:'login', component: LoginComponent},
   {path:'logout', component: LogoutComponent,
   canActivate:[AuthGaurdService]},
   {path:'admin/:id', component: AdminComponent },
   {path:'admins', component: ListAdminComponent},
   {path:'edit-admin/:id', component: EditAdminComponent},
   {path:'owners/:id', component: OwnerComponent },
   {path:'owners', component: ListOwnerComponent},
   {path:'edit-owner/:id', component: EditOwnerComponent},
   {path:'guard/:id', component: GuardComponent },
   {path:'guards', component: ListGuardComponent},
   {path:'edit-guard/:id', component: EditGuardComponent},
   {path:'add-vehicle',component:AddVehicleComponent},
   {path:'vehicles',component:ListVehicleComponent},
   {path:'vehicles/:id',component:VehicleComponent},
   {path:'add-vehicleUpdate/:id',component:AddVehicleupdateComponent},
   {path:'list-vehicleupdate/:id',component:ListVehicleUpdateComponent},
   {path:'add-securityalert',component:AddSecurityalertComponent},
   {path:'securityalerts',component:ListSecurityalertComponent},
   {path:'edit-securityalert/:id',component:EditSecurityalertComponent},
   {path:'securityalerts/:id',component:SecurityalertComponent},
   {path:'add-Dhelp-attendance/:id',component:AddDomestichelpattendanceComponent},
   {path:'list-Dhelp-attendance/:id',component:ListDomestichelpattendanceComponent},
   {path:'add-guard-attendance',component:AddGuardattendanceComponent},
   {path:'list-guardattendance/:id',component:ListGuardattendanceComponent},
   {path:'add-guardsalary/:id',component:AddGuardsalaryComponent},
   {path:'add-guardshift/:id',component:AddGuardshiftComponent},
   {path:'view-guardshift/:id',component:ViewGuardshiftComponent},
   {path:'list-guardsalaries/:id',component:ViewGuardsalaryComponent},
   {path:'add-domestichelp/:id',component:AddDomestichelpComponent},
   {path:'list-domestichelp/:id',component:ListDomestichelpComponent},
   {path:'edit-domestichelp/:id',component:EditDomestichelpComponent},
   {path:'dHelps/:id',component:DomestichelpComponent},
   {path:'flatDetails',component:ListFlatdetailsComponent},
   {path:'list-delivery/:id',component:ListDeliveryComponent},
   {path:'add-delivery/:id',component:AddDeliveryComponent},
   {path:'edit-delivery/:id',component:EditDeliveryComponent},
   {path:'list-visitor/:id',component:ListVisitorComponent},
   {path:'add-visitor/:id',component:AddVisitorComponent},
   {path:'update-visitor/:id',component:UpdateVisitorComponent},
   {path:'add-flatDetails/:id',component:AddFlatdetailsComponent},
   {path:'edit-flatdetails/:id',component:EditFlatdetailsComponent},
   {path:'flatDetails/:id',component:FlatdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
