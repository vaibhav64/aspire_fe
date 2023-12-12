import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalCardComponent } from './carousal-card.component';

describe('CarousalCardComponent', () => {
  let component: CarousalCardComponent;
  let fixture: ComponentFixture<CarousalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousalCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarousalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
