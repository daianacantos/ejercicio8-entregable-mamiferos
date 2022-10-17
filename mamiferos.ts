class mamifero{
    protected tipoDeMamifero:string;
    protected numeroDeEspecie:number;

    constructor(parametroMamifero:string,parametroNumeroDeEspecie:number){
        this.tipoDeMamifero=parametroMamifero;
        this.numeroDeEspecie=parametroNumeroDeEspecie;

    }

    public setnumeroDeEspecie(paramnumeroDeEspecie:number):void{
        this.numeroDeEspecie=paramnumeroDeEspecie;
    }
    public getNumeroDeEspecie():number{
        return this.numeroDeEspecie;
    }
    public setTipoDeMamifero(parametroMamifero:string):void{
        this.tipoDeMamifero=parametroMamifero;
    }
    public getTipoDeMamifero():string{
        return this.tipoDeMamifero;
    }


}


class HerviboroVaca{
    protected cantVaca:number;
protected vecescaminar: number; 

    

    constructor(parametroVaca:number){
        this.cantVaca=parametroVaca;
        this. vecescaminar=10
        
    }

    public setCantidadDeVaca(paramVaca:number):void{
        this.cantVaca=paramVaca;
    }
    public getCantidadDeVaca():number{
        return this.cantVaca;
    }
    
    public caminar():void{
        this.vecescaminar = this.vecescaminar + 10;
        console.log("la vaca camina " + this.caminar)
    }

}


class Ternera extends HerviboroVaca{

    protected HijoDeVaca:boolean;

    constructor(paramCantHijoDeVaca:number,paramTernero: boolean,paramCaminar:boolean){
        super(paramCantHijoDeVaca);
        this.HijoDeVaca=paramTernero;
    }

    public caminar(): void {
        this.vecescaminar = this.vecescaminar + 5;
        console.log("Ternero camina " + this.vecescaminar)
    }

}




class HijaTernero extends HerviboroVaca{


}



let Vaca: any = new mamifero ("manuela",100);
let Ternero: any = new mamifero ("pepa", 9);

Ternero.caminar();

let hijaTernero = new HerviboroVaca (10);


hijaTernero.caminar();


