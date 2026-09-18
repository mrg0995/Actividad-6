import { Component, inject, input, signal } from '@angular/core';
import { UsersServices } from '../../../services/users.services';
import { IEmpleado } from '../../../interfaces/iempleado.interface';
import { DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';

@Component({
    imports: [DecimalPipe, UpperCasePipe, DatePipe],
    selector: 'app-user-view',
    styleUrl: './user-view.component.css',
    templateUrl: './user-view.component.html',
})
export class UserViewComponent {
    usersService = inject(UsersServices)
    _id = input.required<string>()
    employee = signal<IEmpleado | null>(null)

    ngOnInit() {
        this.cargarInfo()
    }

    async cargarInfo() {
        try {
            const response = await this.usersService.getById(this._id()) as IEmpleado
            this.employee.set(response)
        } catch (error) {
            console.log(error)
        }
    }
}