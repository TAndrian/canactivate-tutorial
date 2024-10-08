import { Component } from '@angular/core';
import { SharedCardComponent } from '../../shared/card/component/shared-card.component';
import { NavigationComponent } from '../../shared/navigation/component/navigation.component';
import { RouterOutlet } from '@angular/router';
import { DesktopNavigationComponent } from '../../shared/navigation/desktop/desktop-navigation.component';
import { ProfileComponent } from '../../features/profile/component/profile.component';
import { UserProfile } from 'src/app/shared/model/user-profile';
const MOCK_JOHN_CONNOR: UserProfile = {
  firstname: 'John',
  lastname: 'Connor',
  email: 'john.connor@test.com',
};
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    SharedCardComponent,
    DesktopNavigationComponent,
    ProfileComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  mockJohnConnor: UserProfile = MOCK_JOHN_CONNOR;
  fullname: string = this.getFullName();

  /**
   * Get user's full name.
   * @returns User's full name.
   */
  private getFullName(): string {
    return this.mockJohnConnor.firstname
      .concat(' ')
      .concat(this.mockJohnConnor.lastname);
  }
}
