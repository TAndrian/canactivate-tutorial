import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  /**
   * Convert user's full name into initials.
   * @param name user's full name.
   * @returns user's initials.
   */
  getInitials(name: string): string {
    if (!name) {
      return '';
    }
    const nameArray = name.split(' ');
    const initials = nameArray.map((names) => names[0].toUpperCase()).join('');
    return initials.substring(0, 2);
  }
}
