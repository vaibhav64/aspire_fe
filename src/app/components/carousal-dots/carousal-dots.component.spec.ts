import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalDotsComponent } from './carousal-dots.component';

describe('CarousalDotsComponent', () => {
  let component: CarousalDotsComponent;
  let fixture: ComponentFixture<CarousalDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousalDotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarousalDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
