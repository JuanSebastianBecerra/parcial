import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListComponent } from './coffee-list.component';
import {HttpClientModule} from "@angular/common/http";
import {CoffeeService} from "../coffee.service";
import {DebugElement} from "@angular/core";
import { faker } from '@faker-js/faker';
import {Coffee} from "../coffee";
import {By} from "@angular/platform-browser";

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeListComponent ],
      providers: [CoffeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    for(let i = 0; i < 3; i++) {
      const coffee = new Coffee(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence()
      );
      component.coffeeTypes.push(coffee);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 registers and head names on table with tr elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });

  it('should have create table columns', () => {
    debug.queryAll(By.css('th')).forEach((th) => {
      expect(th.attributes['scope']).toBeTruthy();
    })
  });

  it('should have render origin coffee label', () => {
    expect(debug.queryAll(By.css('span'))[0].nativeElement.textContent).toContain('Total café de origen');
  });

  it('should have render blend coffee label', () => {
    expect(debug.queryAll(By.css('span'))[1].nativeElement.textContent).toContain('Total café blend');
  });
});
