import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageTitle = 'CRUD operations';
  constructor() {}

  ngOnInit() {}
}
