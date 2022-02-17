import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleFormSubmit(formValue: any) {
    console.log(formValue);
  }
}
