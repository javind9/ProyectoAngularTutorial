import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button [style.borderColor] = "isActive ? 'green' : 'white'">Mi boton</button>
  `,
  styles: [`
  `]
})
export class AppComponent {

  isActive = true;

}
