import { Component } from '@angular/core';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css'],
})
export class CliComponent {
  command = 'npm install -g @angular/cli';
  copied = false;

  copy() {
    navigator.clipboard.writeText(this.command);
    this.copied = true;
  }
}
