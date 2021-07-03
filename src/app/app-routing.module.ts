import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditAdminComponent } from './admin/edit-admin.component';
import { ListAdminComponent } from './admin/list-admin.component';
import { AddDomestichelpattendanceComponent } from './domestichelp/add-domestichelpattendance.component';
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

const routes: Routes = [
  {path: 'register',
   component: RegisterComponent},
   {path: 'login', component: LoginComponent},
   {path: 'logout', component: LogoutComponent,
   canActivate:[AuthGaurdService]},
   {path: 'admins/:id', component: AdminComponent },
   {path: 'admins', component: ListAdminComponent},
   {path: 'edit-admin/:id', component: EditAdminComponent},
   {path: 'owners/:id', component: OwnerComponent },
   {path: 'owners', component: ListOwnerComponent},
   {path: 'edit-owner/:id', component: EditOwnerComponent},
   {path:'add-vehicle',component:AddVehicleComponent},
   {path:'vehicles',component:ListVehicleComponent},
   {path:'vehicles/:id',component:VehicleComponent},
   {path:'add-vehicleUpdate/:id',component:AddVehicleupdateComponent},
   {path:'list-vehicleupdate/:id',component:ListVehicleUpdateComponent},
   {path:'add-securityalert',component:AddSecurityalertComponent},
   {path:'securityalerts',component:ListSecurityalertComponent},
   {path:'edit-securityalert/:id',component:EditSecurityalertComponent},
   {path:'securityalerts/:id',component:SecurityalertComponent},
   {path:'add-Dhelp-attendance',component:AddDomestichelpattendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
