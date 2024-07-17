import { Component } from '@angular/core';
import { DataService } from 'src/app/core/sevice/data.service';
import { Customer } from 'src/app/core/customer';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/core/transaction';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  constructor(private _Router : Router ,private _DataService:DataService){}
  Transaction:Transaction[] = []
  Customer:Customer[]=[]
  searchByName:string = ""
  
    ngOnInit(): void {

     this._DataService.transactionsData().subscribe({
      next:(res)=>{
        this.Transaction = res
      }
     })

     this._DataService.customersData().subscribe({
      next:(res)=>{
        this.Customer = res
      }
     })
  
    }
  
    getTransactionsByCustomerId(customerId: number): Transaction[] {
      const customerTransactions = this.Transaction.filter((transaction) => transaction.customer_id == customerId);
      return customerTransactions;
    }

    calculateTotalAmount(customerId: number): number {
      const customerTransactions = this.getTransactionsByCustomerId(customerId);
      const totalAmount = customerTransactions.reduce((acc, curr) => acc + curr.amount, 0);
      return totalAmount;
    }

    goToTransactions(customer_Id: number): void {
      this._Router.navigate(['/Graph', customer_Id]);
    }
    
  
}
