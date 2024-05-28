import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  selector: 'app-control-flow-nav',
  templateUrl: './control-flow-nav.component.html',
  styleUrl: './control-flow-nav.component.css',
})
export class ControlFlowNavComponent {}
