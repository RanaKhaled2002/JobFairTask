import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Component/customer/customer.component';
import { TransactionComponent } from './Component/transaction/transaction.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:CustomerComponent,title:"Home"},
  {path:"Graph/:customer_id",component:TransactionComponent,title:"Graph"},
  {path:"**",component:NotfoundComponent,title:"Not Found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
