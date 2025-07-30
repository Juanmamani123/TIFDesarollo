import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';
import { MensajePageComponent } from './mensaje/mensaje-page/mensaje-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuPageComponent, MensajePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tif_frondend';
}
