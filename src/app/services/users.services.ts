import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmpleado } from '../interfaces/iempleado.interface';
import { firstValueFrom, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersServices {
    private baseUrl = "https://peticiones.online/api/users"
    private httpClient = inject(HttpClient)

    getUsers() {
        return this.httpClient.get<{ results: IEmpleado[] }>(this.baseUrl).pipe(
            map(response => response.results)
        );
    }

    getById(_id: string) {
        return firstValueFrom(this.httpClient.get<IEmpleado>(`${this.baseUrl}/${_id}`))
    }

    getByIdObv(_id: string) {
        return this.httpClient.get<IEmpleado>(`${this.baseUrl}/${_id}`)
    }

    deleteById(_id: string | undefined) {
        return firstValueFrom(this.httpClient.delete<IEmpleado>(`${this.baseUrl}/${_id}`))
    }

    register(user: IEmpleado) {
        return firstValueFrom(this.httpClient.post<IEmpleado>(this.baseUrl, user))
    }

    update(id: string, user: IEmpleado) {


        const { _id, ...resto } = user
        return firstValueFrom(this.httpClient.put<IEmpleado>(`${this.baseUrl}/${id}`, resto))
    }

    getHeaders() {
        return {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token') || ""
            })
        }
    }
}
