import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email;
  password;
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  loginVerification() {
    console.log('reactiveForm' , this.reactiveForm.value);
    this.email = this.reactiveForm.get('email').value;
    console.log(this.email);

    this.password = this.reactiveForm.get('password').value;
    console.log(this.password);

    this.router.navigate(['/main']);
  }

}
