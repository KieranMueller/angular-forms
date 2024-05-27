import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-idle-dash',
  templateUrl: './idle-dash.component.html',
  styleUrls: ['./idle-dash.component.css'],
})
export class IdleDashComponent implements OnInit {
  idleTime: any = interval(1000).subscribe((data) => (this.idleTime = data));

  constructor(private router: Router) {}

  ngOnInit() {
    this.idleTime = 0;
  }

  endSession() {
    this.router.navigateByUrl('');
  }
}
