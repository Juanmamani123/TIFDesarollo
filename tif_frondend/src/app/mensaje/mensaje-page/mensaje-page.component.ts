import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Mensaje } from '../../model/models';
import { MensajeServiceService } from '../../service/mensaje-service.service';

@Component({
  selector: 'app-mensaje-page',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './mensaje-page.component.html',
  styleUrl: './mensaje-page.component.css'
})
export class MensajePageComponent {
  mensajes: Mensaje[] = [];
  randomIndex: number = 0;

  constructor(
    private MensajeService: MensajeServiceService
  ) {}

  ngOnInit(): void {
    this.cargarMensaje();
  }

  private cargarMensaje(): void {
    this.MensajeService.obtenerMensaje().subscribe(mensaje => {
      this.mensajes = mensaje;
      this.randomIndex = Math.floor(Math.random() * this.mensajes.length);
    });
  }
}
