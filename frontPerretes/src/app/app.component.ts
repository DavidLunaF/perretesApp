import { Component } from '@angular/core';
import { MessageService } from './services/message.service';
import swal, * as Swal from 'sweetalert2';
//import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Daily Perretes';
  //swal: SwalComponent;
  constructor(public _MessageService: MessageService) {
  }
   contactForm(form) {
   this._MessageService.sendMessage(form).subscribe(() => {
       swal({
         title: 'Formulario de contacto',
         text: 'Enviado Correctamente.',
         type: 'success'
        })
   });
   }

}
