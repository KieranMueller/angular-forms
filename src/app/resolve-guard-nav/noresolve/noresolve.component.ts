import { Component, OnInit } from '@angular/core';
import { ResolveGuard } from '../resolve/resolve.guard';

@Component({
  selector: 'app-noresolve',
  templateUrl: './noresolve.component.html',
  styleUrls: ['./noresolve.component.css'],
})
export class NoresolveComponent implements OnInit {
  data: any = 'waiting for response...';

  constructor(private service: ResolveGuard) {}

  ngOnInit() {
    this.service.resolve().subscribe((res) => (this.data = res));
  }
}
