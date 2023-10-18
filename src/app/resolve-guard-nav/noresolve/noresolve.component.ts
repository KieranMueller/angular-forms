import { Component, OnInit } from '@angular/core';
import { NoResolveService } from './no-resolve.service';

@Component({
  selector: 'app-noresolve',
  templateUrl: './noresolve.component.html',
  styleUrls: ['./noresolve.component.css'],
})
export class NoresolveComponent implements OnInit {
  data: any = 'waiting for response...';

  constructor(private service: NoResolveService) {}

  ngOnInit() {
    this.service.getStuff().subscribe((res) => (this.data = res));
  }
}
