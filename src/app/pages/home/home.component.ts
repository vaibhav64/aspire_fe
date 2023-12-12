import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardTabsComponent } from '../../components/card-tabs/card-tabs.component';
import { CardDataService } from '../../services/card-data.service';
import { Card } from '../../interfaces/ICardResponse';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog
} from '@angular/material/dialog';
import { NewCardComponent } from '../../components/new-card/new-card.component';
import { CardDetails } from '../../interfaces/ICardDetail';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardTabsComponent,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
@Input() mobileView: boolean = true;
currentCard? : Card;
constructor(public dataService : CardDataService,
  public dialog: MatDialog){
}

openDialog(): void {
  const dialogRef = this.dialog.open(NewCardComponent, {
    data: "",
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    let cardDetails : CardDetails = {
      name : result,
      number: this.dataService.generateRandomNumber(),
      validity_month: 12,
      validity_year: 24,
      cvv: 123,
      freezed : 0,
      balance : 100
    }
    let card: Card = {
      card_details: cardDetails,
      transactions: []
    }
    this.dataService.addNewCard(card);
  });
}

ngOnInit(): void {

}
}
