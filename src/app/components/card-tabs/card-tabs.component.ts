import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CardResponse } from '../../interfaces/ICardResponse';
import { CardDataService } from '../../services/card-data.service';
import { CarousalCardComponent } from '../carousal-card/carousal-card.component';
import { CardActionComponent } from '../card-action/card-action.component';
import { CardTransactionsComponent } from '../card-transactions/card-transactions.component';

@Component({
  selector: 'app-card-tabs',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    CarousalCardComponent,
    CardActionComponent,
    CardTransactionsComponent
  ],
  templateUrl: './card-tabs.component.html',
  styleUrl: './card-tabs.component.scss'
})
export class CardTabsComponent implements OnInit {
  constructor(public dataService : CardDataService){ }
  ngOnInit(): void {
  }
  onTabchange(i : number){
    this.dataService.setCurrentTabIndex(i);
  }
}
