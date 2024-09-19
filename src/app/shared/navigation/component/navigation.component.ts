import { Component } from '@angular/core';
import { DesktopNavigationComponent } from '../desktop/desktop-navigation.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [DesktopNavigationComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {}
