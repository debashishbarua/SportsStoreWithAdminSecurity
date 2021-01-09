import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  //selector: 'app-auth',
  templateUrl: './auth.component.html',
  //styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private datasource: RestDataSource) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.datasource.authenticate(this.username, this.password)
        .subscribe(
          response => {
            if (response.token != null) {
              this.datasource.auth_token = response.token;
              this.router.navigateByUrl("/admin/main");
            }
          },
          (error) => {
            console.error('Error caught in Component');
            this.errorMessage = error.error.message;
            this.username='';
            this.password='';
            
          }
        );
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
  
  ngOnInit(): void {
  }

}
