import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resources = [
    {
      title: 'First resource'
    },
    {
      title: 'Second resource'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
