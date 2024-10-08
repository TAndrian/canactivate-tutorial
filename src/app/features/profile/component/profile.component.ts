import { Component, Input } from '@angular/core';
import { SharedCardComponent } from 'src/app/shared/card/component/shared-card.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  @Input() userFirstname: string = '';
  @Input() userLastname: string = '';
  @Input() userEmail: string = '';
  @Input() userFullname: string = '';
}
