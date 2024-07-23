import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-perks',
  templateUrl: './perks.component.html',
  styleUrls: ['./perks.component.css']
})
export class PerksComponent implements OnInit {

  @ViewChild('techList') techList!: ElementRef;
  @ViewChild('hobbiesList') hobbiesList!: ElementRef;

  private colors = ['blue', 'red', 'yellow']; // Define the color classes
  private currentColorIndex = 0;

  ngOnInit() {
    // Apply styles after the view has been initialized
    setTimeout(() => this.applyDynamicStyles(), 0);
  }

  // Function to apply styles dynamically
  applyDynamicStyles() {
    if (this.techList) {
      this.applyClassToListItems(this.techList.nativeElement);
    }

    if (this.hobbiesList) {
      this.applyClassToListItems(this.hobbiesList.nativeElement);
    }
  }

  // Function to apply a class to list items
  applyClassToListItems(list: HTMLElement) {
    const items = list.getElementsByClassName('list-group-item');
    
    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLElement;
      // Apply the color class and then cycle to the next one
      item.classList.add(this.colors[this.currentColorIndex]);
      this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    }
  }
}
