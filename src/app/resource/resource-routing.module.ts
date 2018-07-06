import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListResolver } from './list-resolver.service';

const routes: Routes = [
  { path: '',
    children: [
      { path: 'list', component: ListComponent, resolve: { resources: ListResolver } },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
