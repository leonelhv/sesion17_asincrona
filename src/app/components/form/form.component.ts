import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from 'src/app/interface/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  id!: string;
  producto!: producto;

  constructor(
    public routeActive: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.routeActive.params.subscribe((params) => {
      this.id = params['id'];
      if (this.productoService.existeProducto(Number(this.id))) {
        this.producto = this.productoService.getProductoById(Number(this.id))!;
      } else {
        this.router.navigate(['']);
      }
    });
  }
  actualizar() {
    this.productoService.actualizarProducto(this.producto);
    this.toastr.success(`ID: ${this.producto.id}`, 'Producto Actualizado', {
      timeOut: 3000,
    });
    this.router.navigate(['']);
  }
}
