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
}
