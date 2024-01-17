import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faDiagramProject,  faFolder, faHeart} from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faEdit = faEdit;
  faDiagramProject = faDiagramProject;
  faFolder = faFolder;
  faHeart = faHeart;
}
