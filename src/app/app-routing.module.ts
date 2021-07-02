import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EditOwnerComponent } from './owner/edit-owner.component';
import { ListOwnerComponent } from './owner/list-owner.component';
import { OwnerComponent } from './owner/owner.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurdService } from './shared/auth-gaurd.service';
import { AddVehicleComponent } from './vehicle/add-vehicle.component';
import { AddVehicleupdateComponent } from './vehicle/add-vehicleupdate.component';
import { ListVehicleComponent } from './vehicle/list-vehicle.component';
import { ListVehicleUpdateComponent } from './vehicle/list-vehicleupdate.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: 'register',
   component: RegisterComponent},
   { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent,
   canActivate:[AuthGaurdService] },
   { path: 'owners/:id', component: OwnerComponent },
   { path: 'owners', component: ListOwnerComponent },
   { path: 'edit-owner/:id', component: EditOwnerComponent },
   {path:'add-vehicle',component:AddVehicleComponent},
   {path:'vehicles',component:ListVehicleComponent},
   {path:'vehicles/:id',component:VehicleComponent},
   {path:'add-vehicleUpdate/:id',component:AddVehicleupdateComponent},
   {path:'list-vehicleupdate/:id',component:ListVehicleUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
