import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardResponse } from '../../interfaces/ICardResponse';
import { CardDataService } from '../../services/card-data.service';

@Component({
  selector: 'app-carousal-dots',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousal-dots.component.html',
  styleUrl: './carousal-dots.component.scss'
})
export class CarousalDotsComponent implements OnInit {
  cards?: CardResponse;
  constructor(private dataService : CardDataService){
  }
  ngOnInit(): void {
    this.cards = this.dataService.cardsData()
  }

  goToSlide(i : number){
    this.dataService.setCurrentCardIndex(i);
  }
}
