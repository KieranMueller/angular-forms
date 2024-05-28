import { Component } from '@angular/core';
import { ControlFlowNavComponent } from './control-flow-nav/control-flow-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ControlFlowNavComponent, CommonModule],
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  // variable
  happy = true;

  // function returns the value of happy variable
  isHappy() {
    return this.happy;
  }
}
