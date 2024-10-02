import { TestBed } from '@angular/core/testing';

import { AvatarService } from './avatar.service';

describe('AvatarService', () => {
  let service: AvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return '' as initial", () => {
    // ARRANGE
    let fullname = '';

    // ACT
    let expected = service.getInitials(fullname);

    // ASSERT
    expect('').toBe(expected);
  });

  it('should return initials', () => {
    // ARRANGE
    let fullname = 'John Connor';
    const INITIALS = 'JC';

    // ACT
    let expected = service.getInitials(fullname);

    // ASSERT
    expect(INITIALS).toBe(expected);
  });
});
