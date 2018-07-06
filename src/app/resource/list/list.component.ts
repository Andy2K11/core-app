import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { IResource } from '../iresource';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resources: IResource[];
  dataSource: MatTableDataSource<IResource>;
  displayedColumns: string[] = ['link', 'id', 'title'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resources = this.route.snapshot.data['resources'];
    this.dataSource = new MatTableDataSource<IResource>(this.resources);
    this.dataSource.sort = this.sort;
  }
}
