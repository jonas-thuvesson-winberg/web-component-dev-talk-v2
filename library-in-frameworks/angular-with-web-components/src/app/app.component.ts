import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-with-web-components';
  counter = 0;

  @HostListener('jlib-increase-button-clicked')
  onIncreaseClicked() {
    this.counter++;
  }

  @HostListener('jlib-decrease-button-clicked')
  onDecreaseClicked() {
    this.counter--;
  }
}
