import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constructor-injection',
  templateUrl: './constructor-injection.component.html',
  styleUrls: ['./constructor-injection.component.css'],
})
export class ConstructorInjectionComponent implements OnInit {
  data: any = 'Give me a sec...';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const randomNum = Math.floor(Math.random() * 19) + 1;
    this.http.get(`https://fakestoreapi.com/products/${randomNum}`).subscribe({
      next: (res) => (this.data = res),
      error: () => (this.data = 'oops... no internet?'),
    });
  }
}
