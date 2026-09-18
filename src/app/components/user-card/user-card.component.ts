import { Component, input, inject } from '@angular/core';
import { IEmpleado } from '../../interfaces/iempleado.interface';
import { RouterLink } from '@angular/router';
import { UsersServices } from '../../services/users.services';

@Component({
    imports: [RouterLink],
    selector: 'app-user-card',
    styleUrl: './user-card.component.css',
    templateUrl: './user-card.component.html',
})
export class UserCardComponent {
    myUser = input<IEmpleado>()
    usersServices = inject(UsersServices)

    async deleteUser(_id: string) {
        await this.usersServices.deleteById(_id)
        location.reload()
    }
}
