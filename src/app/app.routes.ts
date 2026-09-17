import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserListComponent } from './pages/dashboard/userlist/userlist.component';
import { UserViewComponent } from './pages/dashboard/user-view/user-view.component';
import { FormUserComponent } from './pages/dashboard/form-user/form-user.component';
import { C404Component } from './pages/c404/c404.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: 'userlist', component: UserListComponent },
            { path: 'user/:_id', component: UserViewComponent },
            { path: 'newuser', component: FormUserComponent },
            { path: 'updateuser/:_id', component: FormUserComponent },
        ]
    },
    { path: '**', component: C404Component }
];
