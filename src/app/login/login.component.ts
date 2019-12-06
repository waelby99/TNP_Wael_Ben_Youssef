import { Component, OnInit } from '@angular/core';
import { WaoulService } from 'D:/Projet/src/app/waoul.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
m:any;
mot:string;
ff:string;
sub:boolean=false;
  constructor(private waoulservice:WaoulService) { }

  onSubmit(f:NgForm){
    this.sub=true;
  const check=this.waoulservice.verif(this.ff,this.mot);
  if(check==true){
  return true;}
  else {return false;}}

  ngOnInit() {
    this.m=this.waoulservice.login;
  }

}
