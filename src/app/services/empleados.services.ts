import { Injectable , inject } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { IEmpleado } from '../interfaces/iempleado.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmpleadosServices {
    private baseUrl = "https://peticiones.online/api/users"
    private httpClient = inject(HttpClient)

    empleadoResources = httpResource<IEmpleado[]>(() => this.baseUrl)
    getById(_id: string) {
        return firstValueFrom(this.httpClient.get<IEmpleado>(`${this.baseUrl}/${_id}`))
    }
}

