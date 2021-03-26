import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <img [src] = " imagenURL"/>
  <button [disabled] = "botonStatus">Mi boton </button>
  `,
  styles: ['']
})
export class AppComponent {

  imagenURL = "https://www.chiquipedia.com/images/dibujos-simpsons.jpg?phpMyAdmin=9ea091c51a5aa3cf876fb3cf0a5f7f3d"
  botonStatus = false;

}
