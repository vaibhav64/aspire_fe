import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aspire-fe';
  isMobileScreen = true;
  constructor(){
    const mediaQuery = window.matchMedia('( min-width: 768px )');
    if ( mediaQuery.matches ) {
      console.log('Media Query Matched!');
      this.isMobileScreen = false;
    }
  }
}
