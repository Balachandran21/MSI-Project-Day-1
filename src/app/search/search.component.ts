import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public service:SearchService) { }

  ngOnInit(): void {
  }
<<<<<<< HEAD
  onSearch(){
    // this.service.postSearch().subscribe(
    // ()=>{
    // console.log("Displaying results");
    // },
    // (err: any)=>{
    // console.log(err);
    // }
    // );
    // 
  }
=======
  //onSearch(){
  //  this.service.postSearch().subscribe(
  //   ()=>{
  //   console.log("Displaying results");
  //   },
  //   (err: any)=>{
  //   console.log(err);
  //   }
  //   );
     
  //}
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
}
