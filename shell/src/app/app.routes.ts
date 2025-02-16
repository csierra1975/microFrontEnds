import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/mfe1', pathMatch: 'full' },
    {
        path: 'mfe1',
        loadComponent: () => import('mfe1/src/app/app.component').then((m) => m.AppComponentMfe1),
      },
      {
        path: 'mfe2',
        loadComponent: () => import('mfe2/src/app/app.component').then((m) => m.AppComponentMfe2),
      },
];
