import { Injectable } from '@angular/core';
import { Classe } from 'D:/Projet/src/app/Classe';

@Injectable({
  providedIn: 'root'
})
export class WaoulService {
 
layka = [
    new Classe(1245,'PC HP 1245','../assets/pc1.jpg',new Date(2019,4,5),1250,true),
    new Classe(1305,'PC HP 360','../assets/pc2.jpg',new Date(2018,11,2),1500,true),
    new Classe(1851,'PC DELL 781P','../assets/dell1.jpg',new Date(2019,8,18),1199,true),
    new Classe(1487,'PC DELL 146A','../assets/dell2.jpg',new Date(2017,9,26),1300,false),
    new Classe(1450,'PC LENOVO 1200','../assets/lenovo1.jpg',new Date(2019,6,12),999,true)
]
login=['Wael','12345'];
  public verif(x:string,y:string):boolean{
    if((this.login[0]==x)&&(this.login[1]==y)){
      return true;
    }
    else{
      return false;
    }
  }
  public prodid(id:number):Classe{
    for(let t of this.layka){
      if(t._id===id){
        return t;
      }
    }
    return null;
  }
  public ajoutProduit(id:number,libel:string,imag:string,dat:Date,prix:number,booleen:boolean):boolean{
    if(this.prodid(id)==null){
      this.layka.push(new Classe(id,libel,imag,dat,prix,booleen));
      return true;
    }
    return false;
  }
  public remove(o:number){
    for (let i=0;i<this.layka.length;i++){
     if(o==i)
      {this.layka.splice(o,1);}
    }
  }
  public modiferLivre(id: number, libel: string, prix:number) {
    for (let i = 0; i < this.layka.length; i++)
      if (this.layka[i]._id == id) {
        this.layka[i]._libelle = libel;
        this.layka[i]._prix=prix;
        }
      }
      public cherche(id:number){
          for (let i=0;i<this.layka.length;i++){
             if(this.layka[i]._id === id){
               return i;
             }
      
           }
         }    
  constructor() { }
}
