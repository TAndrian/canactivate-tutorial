import { Component, Input } from '@angular/core';
import { AvatarService } from '../service/avatar.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() fullname: string = '';
  initials: string = '';
  constructor(private avatarService: AvatarService) {}

  ngOnInit(): void {
    this.initials = this.avatarService.getInitials(this.fullname);
  }
}
