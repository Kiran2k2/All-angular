import { numberAttribute, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"temp",
    standalone:true
})
export class TempaturePipe implements PipeTransform{
    transform(value: string | number | null,inputType:'cel'|'fah',outputType ?:'cel'|'fah') {
     let val: number;

     if(!value){
        return value
     }
if(typeof value==='string'){
    val=parseFloat(value)
}
        else{
            val=value
        }


 let outputTemp:number;
if(inputType==='cel'&& outputType==='fah'){
    outputTemp=val*(9/5)+32
//! cel to fah

} else if (inputType==='fah'&& outputType==='cel'){
    outputTemp=(val-32 )* 9/5
    //! fah to cel
}
else{
    outputTemp=val;
    
}

let symbol: '∘C'|'∘F'
if(!outputType){
    symbol=inputType==='cel'?  '∘C':'∘F'
}else{
    symbol=outputType==='cel'?  '∘C':'∘F'
}
        return `${outputTemp.toFixed(2)} ${symbol} `
    }

}