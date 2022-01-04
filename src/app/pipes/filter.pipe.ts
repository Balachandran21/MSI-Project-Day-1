import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

<<<<<<< HEAD
    export class FilterPipe implements PipeTransform {
      transform(value: any, args?: any): any {
        if(!value)return value;
        if(!args)return value;
        
        args = args.toLowerCase();
=======
<<<<<<< HEAD
  transform(value: any[], filterstring:string, propName: string): any[] {
    const resultArray=[];
    if(value.length===0 || filterstring==='' || propName===''){
      return value;
    }
    for(const item of value){
      if(item[propName]===filterstring){
        resultArray.push(item)
      }
    }
  return resultArray;
  }
=======
   transform(value: any[], filterstring:string, propName: string): any[] {
     const resultArray=[];
     if(value.length===0 || filterstring==='' || propName===''){
       return value;
    }
>>>>>>> b353fb13a4538ffa0dcdb009564344f9733edc88
  
        return value.filter(function(data: any){
            return JSON.stringify(data).toLowerCase().includes(args);
        });
       }
<<<<<<< HEAD
    }
=======
     }
   return resultArray;
   }
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
}
>>>>>>> b353fb13a4538ffa0dcdb009564344f9733edc88
