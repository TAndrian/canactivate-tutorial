import { Component, Input } from '@angular/core';
import { AvatarService } from '../service/avatar.service';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() fullname: string = '';
  constructor(private readonly avatarService: AvatarService) {}

  ngOnInit(): void {
    this.fullname = this.avatarService.getInitials(this.fullname);
  }
}
