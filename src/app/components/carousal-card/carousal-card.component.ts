import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDataService } from '../../services/card-data.service';
import { CarousalDotsComponent } from '../carousal-dots/carousal-dots.component';


@Component({
  selector: 'app-carousal-card',
  standalone: true,
  imports: [
    CommonModule,
    CarousalDotsComponent
  ],
  templateUrl: './carousal-card.component.html',
  styleUrl: './carousal-card.component.scss'
})
export class CarousalCardComponent implements OnInit {
 constructor(public dataService : CardDataService){
 }
  ngOnInit(): void {
  }

 goToPrev() : void{
  this.dataService.goToPrev();
 }

 goToNext() : void{
  this.dataService.goToNext();
 }

}
