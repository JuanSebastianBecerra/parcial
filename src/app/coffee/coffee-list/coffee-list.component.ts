import { Component, OnInit } from '@angular/core';
import {Coffee} from "../coffee";
import {CoffeeService} from "../coffee.service";

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffeeTypes: Array<Coffee> = [];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffeeTypes();
  }

  getCoffeeTypes(): void {
    this.coffeeService.getCoffeeTypes().subscribe((coffees) => {
      this.coffeeTypes = coffees;
    });
  }

}
