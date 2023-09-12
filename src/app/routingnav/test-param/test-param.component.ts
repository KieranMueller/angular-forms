import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-param',
  templateUrl: './test-param.component.html',
  styleUrls: ['./test-param.component.css'],
})
export class TestParamComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }
}
