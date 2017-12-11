import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Cadáver exquisito';
  form: FormGroup;
  fb: FormBuilder;

  private static CustomValidator(control: AbstractControl) {
    return control.value ? null: {angularFundamentals: false}
  }

  constructor(private fb: FormBuilder) {
    this.fb = fb;
  }

  ngOnInit() {
    this.form = this.fb.group(controlsConfig: {name: ['']})
  }

  console.log(name);
  console.log(form);

}
