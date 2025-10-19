import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  console.log(route,state);
  // const router = inject(Router);
  // router.navigate(['/']);
  return true;
};


// export class AuthGuard implements CanActivate {
//   canActivate(): boolean {
//     return true;
//   }
// }
