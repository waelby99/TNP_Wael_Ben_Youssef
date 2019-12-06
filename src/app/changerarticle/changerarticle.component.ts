import { Component, OnInit } from '@angular/core';
import { WaoulService } from 'D:/Projet/src/app/waoul.service';
@Component({
  selector: 'app-changerarticle',
  templateUrl: './changerarticle.component.html',
  styleUrls: ['./changerarticle.component.css']
})
export class ChangerarticleComponent implements OnInit {
  id:number;
  libel:string;
  prix:number;
  constructor(private waoulservice:WaoulService) { }

  ngOnInit() {
  }
  onSubmit(id:number,libel:string,prix:number){
    this.waoulservice.modiferLivre(this.id,this.libel,this.prix);
  }
  
}
