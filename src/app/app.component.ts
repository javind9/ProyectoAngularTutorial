import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type = "text" (keyup.enter) = "onKeyUp()"/>
  `,
  styles: [`
  `]
})
export class AppComponent {


  onKeyUp(){
      console.log("Enter fue presionado");
  }

}
