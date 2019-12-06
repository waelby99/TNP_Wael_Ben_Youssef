import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WaoulService } from 'D:/Projet/src/app/waoul.service';

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.css']
})
export class AjouterproduitComponent implements OnInit {

  constructor(private waoulservice:WaoulService) { }
  id:number;
  libel:string;
  imag:string;
  dat:Date;
  prix:number;
  booleen:boolean;
  message="";
  ngOnInit() {}
  onSubmit(f:NgForm){
    const ajout=this.waoulservice.ajoutProduit(this.id,this.libel,this.imag,this.dat,this.prix,this.booleen);
  if(ajout)
  this.message="Le produit qui admet l'identifiant "+this.id+" a été bien ajouté";
  else 
  this.message="Le produit qui admet l'identifiant "+this.id+" existe deja";
  }

}
