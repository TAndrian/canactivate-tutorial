import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarComponent } from '../../avatar/component/avatar.component';

@Component({
  selector: 'app-desktop-navigation',
  standalone: true,
  imports: [AvatarComponent, ToolbarModule, ButtonModule],
  templateUrl: './desktop-navigation.component.html',
  styleUrl: './desktop-navigation.component.scss',
})
export class DesktopNavigationComponent {
  fullname: string = 'John Connor';
}
