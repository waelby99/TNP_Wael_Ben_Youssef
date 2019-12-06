export class Classe{
    private id:number;
    private libel:string;
    private imag:string;
    private dat:Date;
    private prix:number;
    private booleen:boolean;

    constructor(i:number,l:string,im:string,da:Date,p:number,b:boolean){
        this.id=i;
        this.libel=l;
        this.imag=im;
        this.dat=da;
        this.prix=p;
        this.booleen=b;
    }
    public get _id():number{
        return this.id;
    }
    public set _id(value:number){
        this.id=value;
    }
    public get _libelle():string{
        return this.libel;
    }
    public set _libelle(value:string){
        this.libel=value;
    }
    public get _imag():string{
        return this.imag;
    }
    public set _imag(value:string){
        this.imag=value;
    }
    public get _dat():Date{
        return this.dat;
    }
    public set _dat(value:Date){
        this.dat=value;
    }
    public get _prix():number{
        return this.prix;
    }
    public set _prix(value:number){
        this.prix=value;
    }
    public get _booleen():boolean{
        return this.booleen;
    }
    public set _booleen(value:boolean){
        this.booleen=value;
    }
}