import { Component, OnInit } from '@angular/core';
import { WaoulService } from 'D:/Projet/src/app/waoul.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-rechercherarticle',
  templateUrl: './rechercherarticle.component.html',
  styleUrls: ['./rechercherarticle.component.css']
})
export class RechercherarticleComponent implements OnInit {

  v:any;
  p:number;
  constructor(private activatedRoute:ActivatedRoute,private waoulservice:WaoulService) { }

  ngOnInit() {
    this.v=this.waoulservice.layka;
  }
  search(p:number){
    this.waoulservice.cherche(this.p);
  }

}
