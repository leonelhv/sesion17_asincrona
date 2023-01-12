import { Component, Input } from '@angular/core';
import { producto } from '../interface/producto.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  @Input() productos: producto[] = [];
}
