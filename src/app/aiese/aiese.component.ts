import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aiese',
  templateUrl: './aiese.component.html',
  styleUrls: ['./aiese.component.css']
})
export class AieseComponent implements OnInit {
  
  id:number;
  libel:string;
  prix:number;
  dat:Date;
  booleen:boolean;
  imag:string;
  b:boolean;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  this.id=this.activatedRoute.snapshot.params['id']
  this.libel=this.activatedRoute.snapshot.params['libel'];
  this.prix=this.activatedRoute.snapshot.params['prix'];
  this.dat=this.activatedRoute.snapshot.params['dat'];
  this.booleen=this.activatedRoute.snapshot.params['booleen'];
  this.imag=this.activatedRoute.snapshot.params['imag'];
  }
  able(b:boolean){
    if (b==true)
    return true;
    else return false;
    
  }
}
