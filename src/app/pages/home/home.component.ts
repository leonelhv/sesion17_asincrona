import { Component } from '@angular/core';
import { producto } from 'src/app/components/interface/producto.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productos: producto[] = [
    {
      id: 1,
      codigo: 1,
      descripcion: 'Galletas Choki',
      precio_compra: 10,
      precio_venta: 15,
      ganancia: 5,
      existencia: 100,
    },
    {
      id: 2,
      codigo: 2,
      descripcion: 'Mermelada de Fresa',
      precio_compra: 65,
      precio_venta: 80,
      ganancia: 15,
      existencia: 100,
    },
    {
      id: 3,
      codigo: 3,
      descripcion: 'Aceite',
      precio_compra: 18,
      precio_venta: 20,
      ganancia: 2,
      existencia: 100,
    },
    {
      id: 4,
      codigo: 4,
      descripcion: 'Palomitas de Maiz',
      precio_compra: 12,
      precio_venta: 15,
      ganancia: 3,
      existencia: 100,
    },
    {
      id: 5,
      codigo: 5,
      descripcion: 'Doritos',
      precio_compra: 5,
      precio_venta: 8,
      ganancia: 3,
      existencia: 100,
    },
  ];
}
