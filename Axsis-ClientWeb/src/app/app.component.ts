import { Component } from '@angular/core';
import { UsuarioService } from './core/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UsuarioService]
})
export class AppComponent {
  title = 'Axsis-ClientWeb';
}
