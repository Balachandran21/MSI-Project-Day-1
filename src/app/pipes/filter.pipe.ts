import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

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
  
     for(const item of value){
       if(item[propName]===filterstring){
         resultArray.push(item)
       }
     }
   return resultArray;
   }
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
}
