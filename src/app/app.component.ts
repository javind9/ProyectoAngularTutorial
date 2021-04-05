import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type = "text" (keyup.enter) = "onKeyUp(nombre.value)"  #nombre/>
  `,
  styles: [`
  `]
})
export class AppComponent {


  onKeyUp(usuario){
    //Obtenemos el valor ingresado en el textbox.
      console.log(usuario);
  }

}
