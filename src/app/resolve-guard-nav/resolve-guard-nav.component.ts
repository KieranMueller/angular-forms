import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve-guard-nav',
  templateUrl: './resolve-guard-nav.component.html',
  styleUrls: ['./resolve-guard-nav.component.css'],
})
export class ResolveGuardNavComponent {
  loading = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  load() {
    if (this.activatedRoute.snapshot.routeConfig?.path !== 'resolve')
      this.loading = true;
  }
}
