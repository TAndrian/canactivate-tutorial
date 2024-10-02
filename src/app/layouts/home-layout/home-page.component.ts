import { Component } from '@angular/core';
import { SharedCardComponent } from '../../shared/card/component/shared-card.component';
import { NavigationComponent } from '../../shared/navigation/component/navigation.component';
import { RouterOutlet } from '@angular/router';
import { DesktopNavigationComponent } from "../../shared/navigation/desktop/desktop-navigation.component";
import { ProfileComponent } from "../../features/profile/component/profile.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, SharedCardComponent, DesktopNavigationComponent, ProfileComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
