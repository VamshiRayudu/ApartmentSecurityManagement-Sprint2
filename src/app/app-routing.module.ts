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
import { AdminHomepageComponent } from './homepage/admin-homepage.component';
import { GuardHomepageComponent } from './homepage/guard-homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OwnerHomepageComponent } from './homepage/owner-homepage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditOwnerComponent } from './owner/edit-owner.component';
import { ListOwnerComponent } from './owner/list-owner.component';
import { OwnerComponent } from './owner/owner.component';
import { UpdatepasswordComponent } from './password/updatepassword.component';
import { RegisterComponent } from './register/register.component';
import { AddSecurityalertComponent } from './securityalert/add-securityalert.component';
import { EditSecurityalertComponent } from './securityalert/edit-securityalert.component';
import { ListSecurityalertComponent } from './securityalert/list-securityalert.component';
import { SecurityalertComponent } from './securityalert/securityalert.component';
import { AuthGaurdService } from './shared/auth-guard.service';

import { AddVehicleComponent } from './vehicle/add-vehicle.component';
import { AddVehicleupdateComponent } from './vehicle/add-vehicleupdate.component';
import { ListVehicleComponent } from './vehicle/list-vehicle.component';
import { ListVehicleUpdateComponent } from './vehicle/list-vehicleupdate.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddVisitorComponent } from './visitor/add-visitor.component';
import { ListVisitorComponent } from './visitor/list-visitor.component';
import { UpdateVisitorComponent } from './visitor/update-visitor.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent, canActivate: [AuthGaurdService]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'logout', component: LogoutComponent,
    canActivate: [AuthGaurdService]
  },
  { path: 'admin/:id', component: AdminComponent, canActivate: [AuthGaurdService] },
  { path: 'admins', component: ListAdminComponent, canActivate: [AuthGaurdService] },
  { path: 'edit-admin/:id', component: EditAdminComponent, canActivate: [AuthGaurdService] },
  { path: 'owners/:id', component: OwnerComponent, canActivate: [AuthGaurdService] },
  { path: 'owners', component: ListOwnerComponent, canActivate: [AuthGaurdService] },
  { path: 'edit-owner/:id', component: EditOwnerComponent, canActivate: [AuthGaurdService] },
  { path: 'guard/:id', component: GuardComponent, canActivate: [AuthGaurdService] },
  { path: 'guards', component: ListGuardComponent, canActivate: [AuthGaurdService], data: { role: 'ADMIN' } },
  { path: 'edit-guard/:id', component: EditGuardComponent, canActivate: [AuthGaurdService] },
  { path: 'add-vehicle', component: AddVehicleComponent, canActivate: [AuthGaurdService] },
  { path: 'vehicles', component: ListVehicleComponent, canActivate: [AuthGaurdService] },
  { path: 'vehicles/:id', component: VehicleComponent, canActivate: [AuthGaurdService] },
  { path: 'add-vehicleUpdate/:id', component: AddVehicleupdateComponent, canActivate: [AuthGaurdService] },
  { path: 'list-vehicleupdate/:id', component: ListVehicleUpdateComponent, canActivate: [AuthGaurdService] },
  { path: 'add-securityalert', component: AddSecurityalertComponent, canActivate: [AuthGaurdService] },
  { path: 'securityalerts', component: ListSecurityalertComponent, canActivate: [AuthGaurdService] },
  { path: 'edit-securityalert/:id', component: EditSecurityalertComponent, canActivate: [AuthGaurdService] },
  { path: 'securityalerts/:id', component: SecurityalertComponent, canActivate: [AuthGaurdService] },
  { path: 'add-Dhelp-attendance/:id', component: AddDomestichelpattendanceComponent, canActivate: [AuthGaurdService] },
  { path: 'list-Dhelp-attendance/:id', component: ListDomestichelpattendanceComponent, canActivate: [AuthGaurdService] },
  { path: 'add-guard-attendance', component: AddGuardattendanceComponent, canActivate: [AuthGaurdService] },
  { path: 'list-guardattendance/:id', component: ListGuardattendanceComponent, canActivate: [AuthGaurdService] },
  { path: 'add-guardsalary/:id', component: AddGuardsalaryComponent, canActivate: [AuthGaurdService] },
  { path: 'add-guardshift/:id', component: AddGuardshiftComponent, canActivate: [AuthGaurdService] },
  { path: 'view-guardshift/:id', component: ViewGuardshiftComponent, canActivate: [AuthGaurdService] },
  { path: 'list-guardsalaries/:id', component: ViewGuardsalaryComponent, canActivate: [AuthGaurdService] },

  { path: 'add-domestichelp/:id', component: AddDomestichelpComponent, canActivate: [AuthGaurdService] },
  { path: 'list-domestichelp/:id', component: ListDomestichelpComponent, canActivate: [AuthGaurdService] },
  { path: 'edit-domestichelp/:id', component: EditDomestichelpComponent, canActivate: [AuthGaurdService] },
  { path: 'dHelps/:id', component: DomestichelpComponent, canActivate: [AuthGaurdService] },
  { path: 'flatDetails', component: ListFlatdetailsComponent, canActivate: [AuthGaurdService] },
  { path: 'list-delivery/:id', component: ListDeliveryComponent, canActivate: [AuthGaurdService] },
  { path: 'add-delivery/:id', component: AddDeliveryComponent, canActivate: [AuthGaurdService] },
  { path: 'edit-delivery/:id', component: EditDeliveryComponent, canActivate: [AuthGaurdService] },
  { path: 'list-visitor/:id', component: ListVisitorComponent, canActivate: [AuthGaurdService] },
  { path: 'add-visitor/:id', component: AddVisitorComponent, canActivate: [AuthGaurdService] },
  { path: 'update-visitor/:id', component: UpdateVisitorComponent, canActivate: [AuthGaurdService] },
  { path: 'add-flatDetails/:id', component: AddFlatdetailsComponent, canActivate: [AuthGaurdService] },
  { path: 'edit-flatdetails/:id', component: EditFlatdetailsComponent, canActivate: [AuthGaurdService] },
  { path: 'flatDetails/:id', component: FlatdetailsComponent, canActivate: [AuthGaurdService] },

  { path: '', component: HomepageComponent },
  { path: 'admin-home', component: AdminHomepageComponent, canActivate: [AuthGaurdService], data: { role: 'ADMIN' } },
  { path: 'guard-home', component: GuardHomepageComponent, canActivate: [AuthGaurdService], data: { role: 'GUARD' } },
  { path: 'owner-home', component: OwnerHomepageComponent, canActivate: [AuthGaurdService], data: { role: 'FLATOWNER' } },
  { path: 'updatePassword', component: UpdatepasswordComponent, canActivate: [AuthGaurdService] },
  { path: '401', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }