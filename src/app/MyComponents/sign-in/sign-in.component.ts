import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  faAppleAlt = faAppleAlt;
}
