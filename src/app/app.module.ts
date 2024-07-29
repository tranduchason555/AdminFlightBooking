import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from "primeng/toast";
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { SanBayComponent } from './components/sanbay/sanbay.component';
import { TableModule } from 'primeng/table';
import { SanBayAPIService } from './services/sanbayAPI.service';
import { FormLienHeAPIService } from './services/formlienheAPI.service';
import { DataService } from './services/dataservice';
import { HanhKhachAPIService } from './services/hanhkhachAPI.service';
import { ThongTinChuyenBayAPIService } from './services/thongtinchuyenbayAPI.service';
import { BaseUrlService } from './services/baseUrl.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ThongTinChuyenBayComponent } from './components/thongtinchuyenbay/thongtinchuyenbay.component';
import { FeedBackComponent } from './components/feedback/feedback.component';
import { VeComponent } from './components/ve/ve.component';
import { VeAPIService } from './services/ve.service';
import { HanhKhachComponent } from './components/hanhkhach/hanhkhach.component';
import { AdminUserComponent } from './components/adminuser/adminuser.component';
import { AdminUserAPIService } from './services/adminuserAPI.service';
import { AddSanBayComponent } from './components/addsanbay/addsanbay.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AddThongTinChuyenBayComponent } from './components/addthongtinchuyenbay/addthongtinchuyenbay.component';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AddAdminUserComponent } from './components/addadminuser/addadminuser.component';
import { TrangChinhComponent } from './components/trangchinh/trangchinh.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    SanBayComponent,
    ThongTinChuyenBayComponent,
    FeedBackComponent,
    VeComponent,
    HanhKhachComponent,
    AdminUserComponent,
    AddSanBayComponent,
    AddThongTinChuyenBayComponent,
    AddAdminUserComponent,
    TrangChinhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    RadioButtonModule,
    SelectButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TableModule,
    CalendarModule,
    ConfirmDialogModule,
    AppRoutingModule,
    AdminRoutingModule,
    RouterModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule,
  ],
  providers: [
    SanBayAPIService,
    FormLienHeAPIService,
    DataService,
    HanhKhachAPIService,
    ThongTinChuyenBayAPIService,
    BaseUrlService,
    VeAPIService,
    AdminUserAPIService,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
