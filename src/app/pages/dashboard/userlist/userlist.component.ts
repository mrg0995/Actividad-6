import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UsersServices } from '../../../services/users.services';
import { UserCardComponent } from '../../../components/user-card/user-card.component';
import { Observable } from 'rxjs';
import { IEmpleado } from '../../../interfaces/iempleado.interface';


@Component({
    imports: [UserCardComponent, AsyncPipe],
    selector: 'app-userlist',
    styleUrl: './userlist.component.css',
    templateUrl: './userlist.component.html',
})
export class UserListComponent {
    usersServices = inject(UsersServices);
    response: Observable<IEmpleado[]> = this.usersServices.getUsers();
}
