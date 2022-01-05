import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-with-web-components';
  counter = 0;

  @HostListener('increase-clicked')
  onIncreaseClicked() {
    this.counter++;
  }

  @HostListener('decrease-clicked')
  onDecreaseClicked() {
    this.counter--;
  }
}
