import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AvatarComponent } from '../../avatar/component/avatar.component';

@Component({
  selector: 'app-desktop-navigation',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, AvatarComponent],
  templateUrl: './desktop-navigation.component.html',
  styleUrl: './desktop-navigation.component.scss',
})
export class DesktopNavigationComponent {
  fullname: string = 'John Connor';
}
