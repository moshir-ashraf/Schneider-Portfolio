import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  baseImageUrl: string = 'images/me';
  currentIndex: number = 0;
  totalImages: number = 3;

  constructor() {}

  ngOnInit() {}

  get currentImage(): string {
    return `${this.baseImageUrl}${this.currentIndex}.jpg`;
  }

  showPrevious(): void {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.totalImages - 1;
  }

  showNext(): void {
    this.currentIndex =
      this.currentIndex < this.totalImages - 1 ? this.currentIndex + 1 : 0;
  }
}
