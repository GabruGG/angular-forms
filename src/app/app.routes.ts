import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { UserResolver } from './user.resolver';

export const routes: Routes = [
    {
        path: 'about',
        // component: About,
        loadComponent: ()=> import('./components/about/about').then((c)=>c.About)
    },
    {
        path: 'contact',
        // component: Contact,
        canActivate: [AuthGuard],
        resolve: {
            data: UserResolver
        },
        loadComponent: ()=> import('./components/contact/contact').then((m)=>m.Contact)
    },
    {
        path: 'faq',
        // component: Faq,
        loadComponent: ()=> import('./components/faq/faq').then((c)=>c.Faq)
    },
    {
        path: 'user/:userId',
        // component: User,
        loadComponent: ()=> import('./components/user/user').then((c)=>c.User),
        children: [
            {
                path:'profile',
                // component: Profile
                 loadComponent: ()=> import('./components/profile/profile').then((c)=>c.Profile),
            }
        ] 
    }
];
