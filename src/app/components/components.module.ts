import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TablaComponent } from './tabla/tabla.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [FormComponent, TablaComponent],
  imports: [CommonModule, RouterLink],
  exports: [FormComponent, TablaComponent],
})
export class ComponentsModule {}
