import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  faAppleAlt = faAppleAlt;
}
