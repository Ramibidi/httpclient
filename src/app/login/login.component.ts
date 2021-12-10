import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthServiceService
   
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
submit():void{
  const data=this.form.getRawValue();
 // console.log('ok');
    this.authService.login(data).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/article']);
        localStorage.setItem('id_token', response.token);
      },
      (error)=>{

      }
    )
}

  

}
