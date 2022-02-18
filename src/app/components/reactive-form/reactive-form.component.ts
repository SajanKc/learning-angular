import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveform: FormGroup = new FormGroup({});
  submited: Boolean = false;

  constructor(private form: FormBuilder) {}
  ngOnInit(): void {
    this.reactiveform = this.form.group({
      name: [undefined, Validators.required],
      email: [
        undefined,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [undefined, Validators.required],
    });
  }
  get forms(): {
    [key: string]: AbstractControl;
  } {
    return this.reactiveform.controls;
  }
  onSubmitForm(form: any): void {
    this.submited = true;
    if (this.reactiveform.valid) {
      console.log(form.value);
    }
  }
}
