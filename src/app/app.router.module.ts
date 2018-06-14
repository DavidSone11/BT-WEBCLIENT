import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuard } from './guards/app.authGuard';

export const routeConfig: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: 'about', component: AboutComponent },

        ]
    },
    { path: '**', redirectTo: '/dashboard' },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(routeConfig);

