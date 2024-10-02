import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../avatar/component/avatar.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { MALE } from '../util/profile-image';

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [
    AvatarComponent,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './shared-card.component.html',
  styleUrl: './shared-card.component.scss',
})
export class SharedCardComponent {
  @Input() userFirstname: string = '';
  @Input() userLastname: string = '';
  @Input() userEmail: string = '';
  @Input() userFullname: string = this.userFirstname.concat(
    ' '.concat(this.userLastname)
  );

  femaleProfilePicture: string = MALE;
}
