import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-unit-test',
  templateUrl: './basic-unit-test.component.html',
  styleUrls: ['./basic-unit-test.component.css'],
})
export class BasicUnitTestComponent implements OnInit {
  name = '';
  num1 = 0;
  num2 = 0;

  ngOnInit(): void {
    this.name = "jasper's calculator";
  }

  getSum(a: number, b: number): number {
    return a + b;
  }
}
