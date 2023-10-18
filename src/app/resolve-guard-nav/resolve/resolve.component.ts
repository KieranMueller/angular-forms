import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css'],
})
export class ResolveComponent implements OnInit {
  dataToDisplay: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.dataToDisplay = this.activatedRoute.data;
  }
}
