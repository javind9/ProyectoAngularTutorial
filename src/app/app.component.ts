import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  miFormulario = new FormGroup({
    username: new FormControl('', Validators.required),
    userpassword: new FormControl('', Validators.required)
  });
}
