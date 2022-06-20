import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AdminComponent} from './admin/admin.component';
import { CustomerloginComponent} from './customerlogin/customerlogin.component';
import { ServiceteamComponent} from './serviceteam/serviceteam.component';
import { CustomerserviceagentComponent} from './customerserviceagent/customerserviceagent.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
  {path:"",component:CustomerloginComponent},
  
  {path:"customerlogin",component:CustomerloginComponent},
  
  
  {path:"serviceteam",component:ServiceteamComponent},
  {path:"customerserviceagent",component:CustomerserviceagentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
