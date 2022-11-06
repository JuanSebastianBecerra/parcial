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
  originCoffeeQuantity: number = 0;
  blendCoffeeQuantity: number = 0;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffeeTypes();
  }

  getCoffeeTypes(): void {
    this.coffeeService.getCoffeeTypes().subscribe((coffees) => {
      this.coffeeTypes = coffees;
      this.originCoffeeQuantity = coffees.filter(coffee => coffee.tipo === "Café de Origen").length;
      this.blendCoffeeQuantity = coffees.filter(coffee => coffee.tipo === "Blend").length;
    });
  }

}
