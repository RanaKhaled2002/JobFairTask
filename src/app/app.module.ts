import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './Component/transaction/transaction.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { SearchByNamePipe } from './core/Pipe/search-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TransactionComponent,
    NotfoundComponent,
    SearchByNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BaseChartDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
