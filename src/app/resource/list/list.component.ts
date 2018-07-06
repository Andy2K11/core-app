import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resources;
  //  = [
  //   {
  //     title: 'First resource'
  //   },
  //   {
  //     title: 'Second resource'
  //   }
  // ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resources = this.route.snapshot.data['resources'];
  }

}
