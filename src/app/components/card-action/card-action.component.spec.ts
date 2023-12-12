import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActionComponent } from './card-action.component';

describe('CardActionComponent', () => {
  let component: CardActionComponent;
  let fixture: ComponentFixture<CardActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
