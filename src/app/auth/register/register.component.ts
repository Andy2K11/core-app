import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+$/i)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(12)]]
    });
  }

  getErrorMessage() {
    return this.registerForm.controls.email.hasError('required') ? 'You must enter a value' :
        this.registerForm.controls.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit() {
    const user = new User(
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.username,
      null,
      null
    );
    this.registerForm.disable();
    this.userService.register(user).subscribe(
      data => {
        this.router.navigate(['/auth/login']);
      },
      error => {
        this.registerForm.enable();
        this.registerForm.setErrors({error: error});
        this.registerForm.markAsPristine();
      });
  }

  onTest() {
    this.registerForm.setValue({
      email: 'frank@example.com',
      password: 'plainpassword',
      username: 'Frank'
    });
    this.registerForm.markAsDirty();   // not pristine (as if value entered)
  }

  onClear() {
    this.registerForm.reset();
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
