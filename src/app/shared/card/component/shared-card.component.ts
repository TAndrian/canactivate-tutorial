import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../avatar/component/avatar.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { MALE } from '../util/profile-image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [
    AvatarComponent,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    CommonModule,
  ],
  templateUrl: './shared-card.component.html',
  styleUrl: './shared-card.component.scss',
})
export class SharedCardComponent {
  @Input() userFirstname: string = '';
  @Input() userLastname: string = '';
  @Input() userEmail: string = '';
  @Input() userFullname: string = '';

  isNotEdit: boolean = true;
  femaleProfilePicture: string = MALE;
  actionLabel: string = 'Edit';

  /**
   * Handle field edition.
   */
  handleEdition() {
    this.isNotEdit = !this.isNotEdit;
    this.actionLabel = this.getActionLabel();
  }

  handleCancledEdition() {
    this.isNotEdit = true;
    this.actionLabel = 'Edit';
  }

  /**
   * Get corresponding label based on desired action.
   * @returns Label.
   */
  getActionLabel(): string {
    return this.isNotEdit ? 'Edit' : 'Save';
  }
}
