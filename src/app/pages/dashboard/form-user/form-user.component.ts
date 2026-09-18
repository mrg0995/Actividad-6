import { Component, inject, input, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { IEmpleado } from '../../../interfaces/iempleado.interface';
import { UsersServices } from '../../../services/users.services';
import { Router } from '@angular/router';

@Component({
    imports: [FormField],
    selector: 'app-form-user',
    styleUrl: './form-user.component.css',
    templateUrl: './form-user.component.html',
})
export class FormUserComponent {
    _id = input<string>()
    title: string = "Insertar"
    usersService = inject(UsersServices)
    router = inject(Router);

    userModel = signal<IEmpleado>({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        image: "",
        password: "",

    })

    readonly userForm = form(this.userModel, (form) => {
    })

    async ngOnInit() {
        const id = this._id()
        if (id) {
            this.title = "Actualizar"

            const employeeUpdate = await this.usersService.getById(id)
            this.userModel.set(employeeUpdate)
        }
    }

    async getDataForm(event: Event) {
        event.preventDefault()
        const id = this._id()
        if (id) {
            const response = await this.usersService.update(id, this.userForm().value())
            if (response) {
            } else {
            }

        } else {
            const response = await this.usersService.register(this.userForm().value())
            if (response._id) {
                console.info(`El usuario ${response.first_name} ha sido creado correctamente`)
            } else {
                console.error('Ha ocurrido un problema no se ha podido registrar el usuarios')
            }
        }
        this.router.navigate(['/dashboard', 'user'])
        this.userForm().reset({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            image: "",
            password: "",
        })


    }


}
