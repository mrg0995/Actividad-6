import { Service , inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmpleado } from '../interfaces/iempleado.interface';

@Service()
export class UsersServices {
    private baseUrl = "https://peticiones.online/api/users"
    private httpClient = inject(HttpClient)

    getUsers() {
        return this.httpClient.get<IEmpleado[]>(this.baseUrl);
    }
}
