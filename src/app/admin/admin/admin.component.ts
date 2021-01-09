import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  //selector: 'app-admin',
  templateUrl: './admin.component.html',
  //styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private datasource: RestDataSource, private router: Router) { }
  logout() {
    this.datasource.clear();
    this.router.navigateByUrl("/");
  }


  ngOnInit(): void {
  }

}
