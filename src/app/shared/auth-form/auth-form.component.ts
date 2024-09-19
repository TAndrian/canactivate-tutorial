import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent {
  @Input() title: string = '';
  @Input() submitButtonLabel: string = '';
  @Input() isRegistrationMode: boolean = false;

  @Output() formSubmit = new EventEmitter<FormGroup>();

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
    });

    if (this.isRegistrationMode) {
      this.addConfirmPasswordControll();
    }
  }

  onsubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form);
    }
  }

  /**
   * If user is on register page, then add confirm password functionnality to form.
   */
  private addConfirmPasswordControll(): void {
    this.form.addControl(
      'confirmPassword',
      this.formBuilder.control('', Validators.required)
    );
  }
}
