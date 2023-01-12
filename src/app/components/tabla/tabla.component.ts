import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { producto } from '../../interface/producto.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  productos: producto[] = [];

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.getProductos();
  }
}
