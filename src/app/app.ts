import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CounterApp');
  count: number = 0;

  handleCounter(action: string) {
    if (action == "minus") {
      if (this.count != 0)
        this.count = this.count - 1;
    } else if (action == 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }
}
