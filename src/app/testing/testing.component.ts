import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


/**
 * @title Table with filtering
 */
@Component({
  selector: 'testing',
  styleUrls: ['testing.css'],
  templateUrl: 'testing.html',
})
export class TableFilteringExample implements OnInit {
  displayedColumns = ['address', 'unit', 'city', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.address.toLowerCase().includes(filter) || data.city.toLowerCase().includes(filter) || data.name.toString() === filter;
    };
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  address: string;
  unit: string;
  city: string;
  name: string;
}

const ELEMENT_DATA: Element[] = [
  {address: "111", name: 'Hydrogen', unit:"1.0079",city: 'H'},
  
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */