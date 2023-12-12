import { Component } from '@angular/core';
import { CardDataService } from '../../services/card-data.service';

@Component({
  selector: 'app-card-action',
  standalone: true,
  imports: [],
  templateUrl: './card-action.component.html',
  styleUrl: './card-action.component.scss'
})
export class CardActionComponent {
  constructor(public dataService : CardDataService){
  }

  freezeCard(){
    this.dataService.onFreezeCard();
  }

  cancleCard(){
    this.dataService.onCancleCard();
  }

}
