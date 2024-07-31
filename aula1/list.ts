class no {
    public valor:any
    public proximo:any
    public constructor(valor,proximo=null) {
        this.valor=valor
        this.proximo=proximo
    }
    public cadeia(a:any){
        this.proximo=a
    }
}
class lista{
    private cabeça:any=null
    private tamanho:number
    public constructor(){
        this.tamanho=0
    }

    public add(valor,pos){
        let novo = new no(valor)
        this.tamanho++
        if(this.tamanho-1==0){
            this.cabeça=novo
            return
        }
        else if(pos<=0){
            novo.cadeia(this.cabeça)
            this.cabeça=novo
            return
        }
        else{
            let prox=this.cabeça
            for(let x=0;x!=pos-1||prox==null;x++){
                prox=prox.proximo
            }
            novo.cadeia(prox.proximo)
            prox.cadeia(novo)
        }
    }
    
    public __len__(){
        return this.tamanho
    }
}

var lista1=new lista()
var lista1 = new lista();
lista1.add(2, 3);
lista1.add(1, 0);
lista1.add(20, 1);
console.log(lista1)