import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { SanBayComponent } from './components/sanbay/sanbay.component';
import { ThongTinChuyenBayComponent } from './components/thongtinchuyenbay/thongtinchuyenbay.component';
import { FeedBackComponent } from './components/feedback/feedback.component';
import { VeComponent } from './components/ve/ve.component';
import { HanhKhachComponent } from './components/hanhkhach/hanhkhach.component';
import { AdminUserComponent } from './components/adminuser/adminuser.component';
import { AddSanBayComponent } from './components/addsanbay/addsanbay.component';
import { AddThongTinChuyenBayComponent } from './components/addthongtinchuyenbay/addthongtinchuyenbay.component';
import { AddAdminUserComponent } from './components/addadminuser/addadminuser.component';
import { TrangChinhComponent } from './components/trangchinh/trangchinh.component';

const routes: Routes = [
  

  {

        path: 'dashboard',
        component: DashBoardComponent,  
  },

 {
  path:'sanbay',
  component: SanBayComponent
 }
 ,
 {
  path:'thongtinchuyenbay',
  component: ThongTinChuyenBayComponent
 }
 ,
 {
  path:'feedback',
  component: FeedBackComponent
 }
 ,
 {
  path:'ve',
  component: VeComponent
 }
 ,
 {
  path:'hanhkhach',
  component: HanhKhachComponent
 }
 ,
 {
  path:'adminuser',
  component: AdminUserComponent
 }
 ,
 {
  path:'addsanbay',
  component: AddSanBayComponent
 }
 ,
 {
  path:'addthongtinchuyenbay',
  component: AddThongTinChuyenBayComponent
 }
 ,
 {
  path:'addadminuser',
  component: AddAdminUserComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
