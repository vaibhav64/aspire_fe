import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDataService } from '../../services/card-data.service';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-card-transactions',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  templateUrl: './card-transactions.component.html',
  styleUrl: './card-transactions.component.scss'
})
export class CardTransactionsComponent implements OnInit {
  panelOpenState = false;
  panelOpenState_1 = false;
  constructor(public dataService : CardDataService){
  }
   ngOnInit(): void {
   }
}
