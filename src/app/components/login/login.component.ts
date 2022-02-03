import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  colorForm: FormGroup;
  disable : boolean = true;
  idCliente = 'aaaa';

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.colorForm = this.fb.group({
      color: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ])
    }) 
    this.loginForm = this.fb.group({
      usuario: new FormControl('', [
        Validators.required
        
      ]),
      password: new FormControl('', [
        Validators.required
       
      ]),
    });
    if(this.idCliente == "aaaa" ||
      this.idCliente  == "bbbb" ||
      this.idCliente  == "cccc"){
      switch (this.idCliente) {
          case 'aaaa':
             document.getElementById("wrapper-login").style.backgroundColor = "#9aaaff";
            break;
          case 'bbbb':
            document.getElementById("wrapper-login").style.backgroundColor = "#ffe994";
            break;
          case 'cccc':
            document.getElementById("wrapper-login").style.backgroundColor = "#9cff97";
            break;
          default:
            document.getElementById("wrapper-login").style.backgroundColor = "white";
            break;
          }
      this.colorForm.disable();
      this.loginForm.enable();
    }else{
      this.loginForm.disable();
    }
    
    
  }

  change(){
    
    if(this.colorForm.controls.color.value  == "aaaa" || 
      this.colorForm.controls.color.value   == "bbbb" || 
      this.colorForm.controls.color.value   == "cccc"){
      this.loginForm.enable();
    }
    switch (this.formC.color.value) {
      case 'aaaa':
        document.getElementById("wrapper-login").style.backgroundColor = "#9aaaff";
        break;
      case 'bbbb':
        document.getElementById("wrapper-login").style.backgroundColor = "#ffe994";
        break;
      case 'cccc':
        document.getElementById("wrapper-login").style.backgroundColor = "#9cff97";
        break;
      default:
        document.getElementById("wrapper-login").style.backgroundColor = "white";
        break;
      }
    }

  get f() {
    return this.loginForm.controls;
  }

  get formC(){
    return this.colorForm.controls;
  }

  onSubmit() {
    this.router.navigate(['/postLogin']);
  }
  // [routerLink]="['postLogin']"


}
