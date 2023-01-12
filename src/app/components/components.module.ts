import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TablaComponent } from './tabla/tabla.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent, TablaComponent],
  imports: [CommonModule, RouterLink, FormsModule],
  exports: [FormComponent, TablaComponent],
})
export class ComponentsModule {}
