import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: number;
  title = 'Cadáver exquisito';
  form: FormGroup;

  private static CustomValidator(control: AbstractControl) {
    return control.value ? null: {angularFundamentals: false}
  }

  constructor(private fb: FormBuilder) {
    this.counter = 1;
  }

  ngOnInit() {
    this.form = this.fb.group(controlsConfig: {
      k1: ['', [
        Validators.minLength( minLength: 7), //home
        Validators.maxLength( maxLength: 9), //mobile
        AppComponent.CustomValidator
      ]]
    });
  }

  increment() {
    this.counter++;
  }

  onSubmit(event) {
    if (this.form.valid) {
      console.log('valid', this.form.valid);
      console.log('k1', this.form.get('k1').value);
    }
  }
}
