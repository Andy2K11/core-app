import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListFilterComponent } from './list-filter/list-filter.component';

@NgModule({
  imports: [
    CommonModule,
    ResourceRoutingModule
  ],
  declarations: [ListComponent, ListItemComponent, ListFilterComponent]
})
export class ResourceModule { }
