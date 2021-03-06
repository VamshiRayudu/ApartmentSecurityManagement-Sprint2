import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { EditGuardComponent } from './guard/edit-guard.component';
import { ListGuardComponent } from './guard/list-guard.component';
import { ListAdminComponent } from './admin/list-admin.component';
import { AddDomestichelpComponent } from './domestichelp/add-domestichelp.component';
import { ListDomestichelpComponent } from './domestichelp/list-domestichelp.component';
import { EditDomestichelpComponent } from './domestichelp/edit-domestichelp.component';
import { EditOwnerComponent } from './owner/edit-owner.component';
import { ListOwnerComponent } from './owner/list-owner.component';
import { OwnerComponent } from './owner/owner.component';
import { GuardComponent } from './guard/guard.component';
import { AdminComponent } from './admin/admin.component';
import { AddSecurityalertComponent } from './securityalert/add-securityalert.component';
import { ListSecurityalertComponent } from './securityalert/list-securityalert.component';
import { EditSecurityalertComponent } from './securityalert/edit-securityalert.component';
import { AddVehicleComponent } from './vehicle/add-vehicle.component';
import { ListVehicleComponent } from './vehicle/list-vehicle.component';
import { AddVisitorComponent } from './visitor/add-visitor.component';
import { UpdateVisitorComponent } from './visitor/update-visitor.component';
import { ListVisitorComponent } from './visitor/list-visitor.component';
import { AddGuardsalaryComponent } from './guard/add-guardsalary.component';
import { AddFlatdetailsComponent } from './flatdetails/add-flatdetails.component';
import { EditFlatdetailsComponent } from './flatdetails/edit-flatdetails.component';
import { ListFlatdetailsComponent } from './flatdetails/list-flatdetails.component';
import { ViewGuardsalaryComponent } from './guard/view-guardsalary.component';
import { AddDeliveryComponent } from './delivery/add-delivery.component';
import { EditDeliveryComponent } from './delivery/edit-delivery.component';
import { ListDeliveryComponent } from './delivery/list-delivery.component';
import { DomestichelpComponent } from './domestichelp/domestichelp.component';
import { AddVehicleupdateComponent } from './vehicle/add-vehicleupdate.component';
import { VisitorComponent } from './visitor/visitor.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditAdminComponent } from './admin/edit-admin.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './shared/registerservice';
import { AuthInterceptor } from './shared/AuthInterceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListVehicleUpdateComponent } from './vehicle/list-vehicleupdate.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SecurityalertComponent } from './securityalert/securityalert.component';
import { AddGuardattendanceComponent } from './guard/add-guardattendance.component';
import { AddDomestichelpattendanceComponent } from './domestichelp/add-domestichelpattendance.component';
import { ListDomestichelpattendanceComponent } from './domestichelp/list-domestichelpattendance.component';
import { ListGuardattendanceComponent } from './guard/list-guardattendance.component';
import { AddGuardshiftComponent } from './guard/add-guardshift.component';
import { ViewGuardshiftComponent } from './guard/view-guardshift.component';
import { FlatdetailsComponent } from './flatdetails/flatdetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminHomepageComponent } from './homepage/admin-homepage.component';
import { OwnerHomepageComponent } from './homepage/owner-homepage.component';
import { GuardHomepageComponent } from './homepage/guard-homepage.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UpdatepasswordComponent } from './password/updatepassword.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    EditAdminComponent,
    LogoutComponent,
    EditGuardComponent,
    ListGuardComponent,
    ListAdminComponent,
    AddDomestichelpComponent,
    ListDomestichelpComponent,
    EditDomestichelpComponent,
    EditOwnerComponent,
    ListOwnerComponent,
    OwnerComponent,
    GuardComponent,
    AdminComponent,
    AddSecurityalertComponent,
    ListSecurityalertComponent,
    EditSecurityalertComponent,
    AddVehicleComponent,
    ListVehicleComponent,
    AddVisitorComponent,
    UpdateVisitorComponent,
    ListVisitorComponent,
    AddGuardsalaryComponent,
    AddFlatdetailsComponent,
    EditFlatdetailsComponent,
    ListFlatdetailsComponent,
    ViewGuardsalaryComponent,
    AddDeliveryComponent,
    EditDeliveryComponent,
    ListDeliveryComponent,
    DomestichelpComponent,
    AddVehicleupdateComponent,
    VisitorComponent,
    RegisterComponent,
    ListVehicleUpdateComponent,
    VehicleComponent,
    SecurityalertComponent,
    AddGuardattendanceComponent,
    AddDomestichelpattendanceComponent,
    ListDomestichelpattendanceComponent,
    ListGuardattendanceComponent,
    AddGuardshiftComponent,
    ViewGuardshiftComponent,
    FlatdetailsComponent,
    HomepageComponent,
    AdminHomepageComponent,
    OwnerHomepageComponent,
    GuardHomepageComponent,
    UpdatepasswordComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule.forRoot([])
  ],
  providers: [RegisterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
