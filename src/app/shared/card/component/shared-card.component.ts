import { Component } from '@angular/core';
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
  userFirstname: string = 'John';
  userLastname: string = 'Connor';
  userEmail: string = 'john.connor@test.com';
  userFullname: string = this.userFirstname.concat(
    ' '.concat(this.userLastname)
  );

  femaleProfilePicture: string = MALE;
}
