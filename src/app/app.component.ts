import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  changeColour(): void {
    const body = document.querySelector('body');
    const curr = body.classList.contains('core-light');
    if (curr) {
      body.classList.remove('core-light');
      body.classList.add('core-dark');
    } else {
      body.classList.remove('core-dark');
      body.classList.add('core-light');
    }
    console.log('button pressed');
  }
}
