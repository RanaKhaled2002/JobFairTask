import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { DataService } from 'src/app/core/sevice/data.service';
import { Transaction } from 'src/app/core/transaction';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
 
  customer_ID!:number;
  transaction:Transaction[] = []
  constructor(private _ActivatedRoute:ActivatedRoute,private _DataService:DataService,private _Router:Router){}

  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe({
      next:(params)=>{
        this.customer_ID = params['customer_id']
      }
    })

    this._DataService.getTransactionByCustomerId(this.customer_ID).subscribe({
      next:(res)=>{
        this.transaction = res

        const xValues = this.transaction.map(t => t.date);
        const yValues = this.transaction.map(t => t.amount);
        const barColors = ["brown"];

        new Chart("myChart", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              label: 'Transaction Amounts',
              data: yValues,
              backgroundColor: barColors,
              borderColor: barColors,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Amount'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Date'
                }
              }
            },
            plugins: {
              legend: {
                display: true,
                position: 'top'
              },
              tooltip: {
                enabled: true,
                mode: 'nearest',
                intersect: false
              }
            }
          }
        });

      }
    })
  }

  goToHome(): void {
    this._Router.navigate(['/Home']);
  }
}
