import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss'
})
export class GreetingsComponent {
 message = input('No message to show');
}
