import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: '**',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes, { useHash: true, relativeLinkResolution: 'legacy' } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}