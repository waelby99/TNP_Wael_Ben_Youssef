import { Component, OnInit } from '@angular/core';
import { WaoulService } from 'D:/Projet/src/app/waoul.service';
@Component({
  selector: 'app-aie',
  templateUrl: './aie.component.html',
  styleUrls: ['./aie.component.css']
})
export class AieComponent implements OnInit {
a:any;
  constructor(private waoulservice:WaoulService) { }

  f:number; 
  ngOnInit() {
   this.a=this.waoulservice.layka;
  }
  ondelete(f:number){
    this.waoulservice.remove(f);
  }
}