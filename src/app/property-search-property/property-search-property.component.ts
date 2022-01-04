import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../shared/api.service';
import { SearchService } from '../search.service';
import { OwnerModel, PropertyModel } from './property-search-property.model';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';




@Component({
  selector: 'app-property-search-property',
  templateUrl: './property-search-property.component.html',
  styleUrls: ['./property-search-property.component.css']
})
export class PropertySearchPropertyComponent implements OnInit {

  searchText:any;
  formValue!: FormGroup;
  OwnerModelObj: OwnerModel = new OwnerModel();
  OwnerData:any = [{address:""},{unit:""},{city:""},{name:""}];
  PropertyModelObj: PropertyModel = new PropertyModel();
  PropertyData:any=[{permits:""},{serviceRequest:""},{Inspections:""},{violation:""},{invioce:""},{buisnessLiecence:""}]
  abbc = "dsvsdv";
  service: any;
  SortDirection='asc';
  orderBy='';
  city='';
  unit='';
  address='';
  name='';
<<<<<<< HEAD
  ownerfirstname='';
  ownerlastname='';
  pin='';
  streetname='';
  streetnumber='';
=======
<<<<<<< HEAD
=======
>>>>>>> b353fb13a4538ffa0dcdb009564344f9733edc88
  SearchCity: any;
  SearchAddress: any;
  SearchUnit: any;
  SearchName: any;
  SortAddress:any;
  permit='';
  serviceRequest='';
  businessLicenses='';
  inspections='';
  invoices='';
  violations='';
  SearchserviceRequest='';
  Searchpermits='';
  SearchbuisnessLiecence='';
  SearchInspections='';
  Searchinvioce='';
  Searchviolations='';


<<<<<<< HEAD
  sortBy:string="";
  sortOrder:string="ASC";
=======
 
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
>>>>>>> b353fb13a4538ffa0dcdb009564344f9733edc88

  constructor(private formbuilder: FormBuilder, private api: ApiService, private search: SearchService) { }


  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      OwnerCompanyName: [''],
      StreetName: [''],
      StreetNumber: [''],
      PIN: [''],
      Unit: [''],
      City: [''],
      violations:[''],
      businessLicenses:[''],
      inspections:[''],
      invoices:[''],
      permit:[''],
      serviceRequest:['']
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
    this.PropertyModelObj.permits=this.formValue.value.permits;
    this.PropertyModelObj.serviceRequest=this.formValue.value.serviceRequest;
    this.PropertyModelObj.violation=this.formValue.value.violations;
    this.PropertyModelObj.buisnessLiecence=this.formValue.value.buisnessLicenses;
    this.PropertyModelObj.invioce=this.formValue.value.invoices;
    this.PropertyModelObj.Inspections=this.formValue.value.inspections;
    
    

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
    this.searchText=this.address||this.name||this.unit||this.city;
    this.SearchCity=this.city;
    this.SearchAddress=this.address;
    this.SearchUnit=this.unit;
    this.SearchName=this.name;
    this.Searchpermits=this.permit;
    this.SearchInspections=this.inspections;
    this.SearchserviceRequest=this.serviceRequest;
    this.Searchinvioce=this.invoices;
    this.Searchviolations=this.violations;
    this.SearchbuisnessLiecence=this.businessLicenses;


    var a = {
      "request": [
      {
      "url": "api/propertyquicksearch",
      "action": "post",
      "propertyquicksearch": {
      "customer": {
      "useremail": "msi@matteson.org",
      "screenname": "search",
      "customerid": "201"
      },
      "customerid": "201",
      "streetnumber": "111",
      "city": "Matteson"
      }
      }
      ]
      }
    console.log("Working");
    debugger
    this.search.postSearch(a).subscribe(
      (res:any) => {
        console.log(res.results.result[0]);
        this.PropertyData=res.results.result[0];
        console.log(res.results.result[0].json.results);
        this.OwnerData = res.results.result[0].json.results;
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
    this.searchText='';
    this.ownerfirstname='';
    this.ownerlastname='';
    this.pin='';
    this.streetname='';
    this.SearchCity='';
    this.city='';
    this.SearchAddress='';
    this.address='';
    this.SearchUnit='';
    this.unit='';
    this.SearchName='';
    this.name='';
    this.Searchpermits;
    this.permit;
    this.SearchserviceRequest;
    this.serviceRequest;
    this.SearchInspections;
    this.inspections;
    this.Searchviolations;
    this.violations;
    this.Searchinvioce;
    this.invoices;
    this.SearchbuisnessLiecence;
    this.businessLicenses;
  }
<<<<<<< HEAD

}
=======
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
}



<<<<<<< HEAD

=======
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
>>>>>>> b353fb13a4538ffa0dcdb009564344f9733edc88
