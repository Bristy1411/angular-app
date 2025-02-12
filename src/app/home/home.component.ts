import { Component, signal } from '@angular/core';
import { GreetingsComponent } from '../components/greetings/greetings.component';
import { CounterComponent } from '../components/counter/counter.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingsComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('Hello world!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}
