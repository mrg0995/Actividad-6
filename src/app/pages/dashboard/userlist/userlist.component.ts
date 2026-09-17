import { Component, inject } from '@angular/core';
import { UsersServices } from '../../../services/users.services';
import { UserCardComponent } from '../../../components/user-card/user-card.component';
import { Observable } from 'rxjs';
import { IEmpleado } from  "../../../interfaces/empleado.interface"
import { httpResource } from ''


@Component({
    imports: [],
    selector: 'app-userlist',
    styleUrl: './userlist.component.css',
    templateUrl: './userlist.component.html',
})
export class UserListComponent {
    usersServices = inject(UsersServices);
    response = httpResource<IEmpleado[]>(this.usersServices.getUsers());
    }
