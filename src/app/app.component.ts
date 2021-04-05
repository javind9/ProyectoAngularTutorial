import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  personas : any = [];

    constructor(private usuariosservice : UsuariosService){
        this.personas = usuariosservice.getUsuarios();
    }
}
