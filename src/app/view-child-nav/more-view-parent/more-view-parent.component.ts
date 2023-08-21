import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-more-view-parent',
  templateUrl: './more-view-parent.component.html',
  styleUrls: ['./more-view-parent.component.css'],
})
export class MoreViewParentComponent implements AfterViewInit {
  @ViewChild('text', { static: true })
  textRef?: ElementRef<HTMLParagraphElement>;
  ts = `
  import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

  @Component({
    selector: 'app-more-view-parent',
    templateUrl: './more-view-parent.component.html',
    styleUrls: ['./more-view-parent.component.css'],
  })
  export class MoreViewParentComponent implements AfterViewInit {
    @ViewChild('text', { static: true })
    textRef?: ElementRef<HTMLParagraphElement>;

    ngAfterViewInit(): void {
      if (this.textRef?.nativeElement)
        this.textRef.nativeElement.textContent = 'new text!!!';
    }
  }
  `;
  html = `
  <p #text>this is my text before view init</p>
  `;
  showTs = true;
  showHtml = true;

  ngAfterViewInit(): void {
    if (this.textRef?.nativeElement)
      this.textRef.nativeElement.textContent = 'new text!!!';
  }
}
