import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  exports: [
    MenuComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
