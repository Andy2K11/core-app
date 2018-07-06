import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { ListResolver } from './list-resolver.service';
import { ResourceService } from './resource.service';

@NgModule({
  imports: [
    CommonModule,
    ResourceRoutingModule
  ],
  declarations: [ListComponent, ListItemComponent, ListFilterComponent],
  providers: [ ListResolver, ResourceService]
})
export class ResourceModule { }
