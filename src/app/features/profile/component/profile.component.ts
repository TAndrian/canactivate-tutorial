import { Component } from '@angular/core';
import { SharedCardComponent } from 'src/app/shared/card/component/shared-card.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
