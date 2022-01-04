import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../shared/api.service';
import { PostsService } from '../posts.service';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { AddressModel } from './property-new-property.model';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';



@Component({
  selector: 'app-property-new-property',
  templateUrl: './property-new-property.component.html',
  styleUrls: ['./property-new-property.component.css']
})
export class PropertyNewPropertyComponent implements OnInit {

  control=new FormControl();
  searchText:any;
  formValue!: FormGroup;
  AddressModelObj: AddressModel = new AddressModel();
  AddressData:any = [{Address:""}];
  abbc = "dsvsdv";
  service: any;
  SortDirection='asc';
  orderBy='';
  Street='';
  elements:any;
  SearchStreet:any;
  Address:any;
//  dataSource=new MatTableDataSource(this.AddressData);
//  applyFilter(filterValue:string){
//    this.dataSource.filter=filterValue.trim().toLowerCase();
//  }


  sortBy:string="";
  sortOrder:string="ASC";

  constructor(private formbuilder: FormBuilder, private api: ApiService, private posts: PostsService) {}

  

  ngOnInit(): void {
    this.AddressData=this.Address;

    this.AddressData=this.control.valueChanges.pipe(
      startWith(''),
      map(val=>this._filter(val))
    );
    this.onAddress();
    this.searchText=this.onAddress();
    this.formValue = this.formbuilder.group({
      Street: [''],
    })
    this.getAllAddress();
    console.log(this.AddressData);
  }
  
  


  postOwnerDetails() {
    this.AddressModelObj.Street = this.formValue.value.Street;
    
    

    this.api.postOwner(this.AddressModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert("Owner Details Added Successfully")
      },
        () => {
          alert("Something Went Wrong");
        })
  }
  getAllAddress() {
    this.api.getOwner()
     .subscribe((res: any) => {
         this.AddressData = res;
       })

  }
  
  onAddress() {
  
this.SearchStreet=this.Street;

    var b = {"request": {
      "method": "POST",
      "header": [],
      "body": {
        "mode": "raw",
        "raw": ""
      },
      "url": {
        "raw": "https://3c994b79-ffd0-45d2-be80-ae2771320d27.mock.pstmn.io/getAddressProperty",
        "protocol": "https",
        "host": [
          "3c994b79-ffd0-45d2-be80-ae2771320d27",
          "mock",
          "pstmn",
          "io"
        ],
        "path": [
          "getAddress"
        ]
      }
    }
}
      
      
      
      
    console.log("Working");
    this.posts.postSearch(b).subscribe(
      (res:any) => {
        console.log(res.Address);
        this.AddressData=res.Address;
      },
  
      (err: any) => {
        console.log(err);
      }
    );

    }
  
   onSortDirection(){
  //   // this.SortAddress=this.address;
  //   // if(this.SortDirection=='desc'){
  //   //   this.SortDirection='asc';
  //   // }else{
  //   //   this.SortDirection='desc';
  //   // }
   }  

  
  


  applyFilter(){
    this.Street=this.Street.trim().toLowerCase();
  }
  onSear(){
    this.Address='';
    this.applyFilter();
  }

  private _filter(val:any):any[]{
    const formatval=val.toLocaleLowerCase();

    return this.AddressData.filter((Street:any)=>Street.toLocaleLowerCase().indexOf(formatval)===0);
  }

  }