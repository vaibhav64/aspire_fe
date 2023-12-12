import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Card, CardResponse } from '../interfaces/ICardResponse';
import { data } from '../data/prev-data';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  currentCardIndex = signal(0);
  currentTabIndex = signal(0);
  cardResponse : WritableSignal<CardResponse[]> = signal(data);
  cardsData : Signal<CardResponse> = computed(() => this.cardResponse()[this.currentTabIndex()]);
  currentCard : Signal<Card> = computed(() => this.cardsData().cards[this.currentCardIndex()])
  constructor() {}
  
  setCurrentCardIndex(i: number): void{
    this.currentCardIndex.set(i);
  }

  setCurrentTabIndex(i: number): void{
    this.currentTabIndex.set(i);
  }

  addNewCard(data : Card){
    this.cardResponse.update(value => value.map((val,i) => {
      if(i == this.currentTabIndex()) val.cards.push(data);
      return val;
    }));
  }

  generateRandomNumber() : string{
    let val = Math.floor(1000 + Math.random() * 9000);
    return '123412341234'+val.toString();
  }

  goToPrev() : void{
    const isLastSlide = this.currentCardIndex() === this.cardsData().cards.length-1;
    const newIndex = isLastSlide ? 0 : this.currentCardIndex()+1;
    this.currentCardIndex.set(newIndex);
 }

 goToNext() : void{
  const isFirstSlide = this.currentCardIndex() === 0;
  const newIndex = isFirstSlide ? this.cardsData().cards.length - 1 : this.currentCardIndex() - 1;
  this.currentCardIndex.set(newIndex);
 }

 onFreezeCard() : void{
  this.cardResponse.update(value => value.map((val,i) => {
    if(i == this.currentTabIndex()) val.cards[this.currentCardIndex()].card_details.freezed = 1;
    return val;
  }));
 }

 onCancleCard() : void{
  this.cardResponse.update(value => value.map((val,i) => {
    if(i == this.currentTabIndex()) val.cards.splice(this.currentCardIndex(),1);
    return val;
  }));
 }
}
