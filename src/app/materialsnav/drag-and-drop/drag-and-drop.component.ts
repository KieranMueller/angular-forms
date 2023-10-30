import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css'],
})
export class DragAndDropComponent {
  shows = [
    'The King of Queens',
    'Seinfeld',
    'The Office',
    "Hell's Kitchen",
    'Kitchen Nightmares',
    'Hotel Hell',
  ];
  showList: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.shows, event.previousIndex, event.currentIndex);
  }

  test() {
    console.log(this.shows);
  }
}
