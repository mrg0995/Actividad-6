import { Component, inject } from '@angular/core';
import { UsersServices } from '../../../services/users.services';
import { UserCardComponent } from '../../../components/user-card/user-card.component';


@Component({
    imports: [],
    selector: 'app-userlist',
    styleUrl: './userlist.component.css',
    templateUrl: './userlist.component.html',
})
export class UserListComponent {
    usersServices = inject(UsersServices);
    response = this.usersServices;
}
