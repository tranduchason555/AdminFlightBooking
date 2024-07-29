import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TrangChinhComponent } from './components/trangchinh/trangchinh.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  
  {
    path:'',
    component: TrangChinhComponent,
    children:[
      {
        path: '',
        component: LoginComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
