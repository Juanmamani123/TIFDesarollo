import { Routes } from '@angular/router';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';
import { MensajePageComponent } from './mensaje/mensaje-page/mensaje-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MenuPageComponent
    },
    {
        path: 'mensaje',
        component: MensajePageComponent
    }
];
