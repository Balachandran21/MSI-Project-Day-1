import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../shared/api.service';
import { SearchService } from '../search.service';
import { OwnerModel } from './property-search-property.model';




@Component({
  selector: 'app-property-search-property',
  templateUrl: './property-search-property.component.html',
  styleUrls: ['./property-search-property.component.css']
})
export class PropertySearchPropertyComponent implements OnInit {

  formValue!: FormGroup;
  OwnerModelObj: OwnerModel = new OwnerModel();
  OwnerData:any = [{ address:""},{unit:""},{city:""},{name:""}];
  abbc = "dsvsdv";
  service: any;
  SortDirection='asc';
  orderBy='';
  city='';
  unit='';
  address='';
  name='';
<<<<<<< HEAD
=======
  SearchCity: any;
  SearchAddress: any;
  SearchUnit: any;
  SearchName: any;
  SortAddress:any;
  PermitArray: any;
  ServiceArray: any;
  InspectionArray: any;
  ViolationsArray: any;
  InvoicesArray: any;
  BusinessArray: any;
  permit='';
  servicea='';
  inspections='';
  violations='';
  invoices='';
  business='';


 
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c

  constructor(private formbuilder: FormBuilder, private api: ApiService, private search: SearchService) { }


  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      OwnerCompanyName: [''],
      StreetName: [''],
      StreetNumber: [''],
      PIN: [''],
      Unit: [''],
      City: ['']
    })
    this.getAllOwner();
    console.log(this.OwnerData);
  }



  postOwnerDetails() {
    this.OwnerModelObj.OwnerCompanyName = this.formValue.value.OwnerCompanyName;
    this.OwnerModelObj.StreetName = this.formValue.value.StreetName;
    this.OwnerModelObj.StreetNumber = this.formValue.value.StreetNumber;
    this.OwnerModelObj.PIN = this.formValue.value.PIN;
    this.OwnerModelObj.Unit = this.formValue.value.Unit;
    this.OwnerModelObj.City = this.formValue.value.City;

    
    

    this.api.postOwner(this.OwnerModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert("Owner Details Added Successfully")
      },
        () => {
          alert("Something Went Wrong");
        })
  }
  getAllOwner() {
<<<<<<< HEAD
    // this.api.getOwner()
    //   .subscribe((res: any) => {
    //     this.OwnerData = res;
    //   })

  }
  onSearch() {
    var a = {
      "request": [
        {
          "url": "api/propertyquicksearch",
          "action": "post",
          "propertyquicksearch": {
            "customer": {
              "useremail": "msi@southholland.org",
              "screenname": "search",
              "customerid": "217"
            },
            "customerid": "217",
            "streetnumber": "111",
            "city": "South Holland"
          }
        }
      ]}
    console.log("Working");
    this.search.postSearch(a).subscribe(
      (res:any) => {
        console.log(res.results.result[0].json.results);
        this. OwnerData = res.results.result[0].json.results;
      },
=======
    this.api.getOwner()
     .subscribe((res: any) => {
         this.OwnerData = res;
       })

  }
  onSearch() {
    this.SearchCity=this.city;
    this.SearchAddress=this.address;
    this.SearchUnit=this.unit;
    this.SearchName=this.name;
    this.PermitArray=this.permit;
    this.ServiceArray=this.service;
    this.InspectionArray=this.inspections;
    this.BusinessArray=this.business;
    this.InvoicesArray=this.invoices;
    this.ViolationsArray=this.violations;
  
    var a = {
      
      "request": [
        {
            "url": "api/propertyquicksearch",
            "action": "post",
            "propertyquicksearch": {
                "customer": {
                    "useremail": "msi@southholland.org",
                    "screenname": "search",
                    "customerid": "217"
                },
                "customerid": "217",
                "streetnumber": "111",
                "city": "South Holland"
            }
        }
    ]
        }
    console.log("Working");
    debugger
    this.search.postSearch(a).subscribe(
      (res:any) => {
      
        console.log(res.results.result[0].json.results);
        this. OwnerData = res.results.result[0].json.results;
      },
  
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
      (err: any) => {
        console.log(err);
      }
    );

  }

  onSortDirection(){
<<<<<<< HEAD
    if(this.SortDirection==='desc'){
      this.SortDirection='asc';
    }else{
      this.SortDirection='desc';
    }
  }  
  
=======
    // this.SortAddress=this.address;
    // if(this.SortDirection=='desc'){
    //   this.SortDirection='asc';
    // }else{
    //   this.SortDirection='desc';
    // }
  }  

  
  
  onClear(){
    this.SearchCity='';
    this.city='';
    this.SearchAddress='';
    this.address='';
    this.SearchUnit='';
    this.unit='';
    this.SearchName='';
    this.name='';
  }
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
}



<<<<<<< HEAD

=======
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
