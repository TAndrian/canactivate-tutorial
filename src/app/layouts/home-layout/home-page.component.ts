import { Component } from '@angular/core';
import { SharedCardComponent } from '../../shared/card/component/shared-card.component';
import { NavigationComponent } from '../../shared/navigation/component/navigation.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavigationComponent, SharedCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
