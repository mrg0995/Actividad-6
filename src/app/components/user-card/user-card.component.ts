import { Component, input } from '@angular/core';
import { IEmpleado } from '../../interfaces/iempleado.interface';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.component.css',
  templateUrl: './user-card.component.html',
})
export class UserCardComponent {
    myUser = input<IEmpleado>()
}
