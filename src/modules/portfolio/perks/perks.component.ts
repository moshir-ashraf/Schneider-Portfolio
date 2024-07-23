import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-perks',
  templateUrl: './perks.component.html',
  styleUrls: ['./perks.component.css'],
})
export class PerksComponent implements OnInit {
  @ViewChild('techList') techList!: ElementRef;
  @ViewChild('hobbiesList') hobbiesList!: ElementRef;

  private colors = ['blue', 'red', 'yellow'];
  private currentColorIndex = 0;

  ngOnInit() {
    setTimeout(() => this.applyDynamicStyles(), 0);
  }

  applyDynamicStyles() {
    if (this.techList) {
      this.applyClassToListItems(this.techList.nativeElement);
    }

    if (this.hobbiesList) {
      this.applyClassToListItems(this.hobbiesList.nativeElement);
    }
  }

  applyClassToListItems(list: HTMLElement) {
    const items = list.getElementsByClassName('list-group-item');

    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLElement;
      item.classList.add(this.colors[this.currentColorIndex]);
      this.currentColorIndex =
        (this.currentColorIndex + 1) % this.colors.length;
    }
  }
}
