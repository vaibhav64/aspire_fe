import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/ITransaction';
import { CommonModule } from '@angular/common';
import { CardDataService } from '../../services/card-data.service';

@Component({
  selector: 'app-card-transactions',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-transactions.component.html',
  styleUrl: './card-transactions.component.scss'
})
export class CardTransactionsComponent implements OnInit {
  constructor(public dataService : CardDataService){
  }
   ngOnInit(): void {
   }
}
