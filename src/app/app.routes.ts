import { AuthGuard } from "./auth/auth.guard";

export const AppRoutes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: '',
        loadChildren: './curemovies/curemovies.module#CuremoviesModule',
        canActivate: [AuthGuard]
    },
    // {
    //     path: '',
    //     redirectTo: '/',
    //     pathMatch: 'full'
    // },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];