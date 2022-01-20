import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';




export const pagesRoutes: Routes = [
    {
        path: 'home', component: HomeComponent
    },

    // Predeterminado
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

// export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);