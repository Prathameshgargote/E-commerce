import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @ViewChild('catagoryscroller', { static: false })
  catagoryscroller!: ElementRef;
  scrollRight() {
    this.catagoryscroller.nativeElement.scrollBy({
      left: 320,
      behavior: 'smooth',
    });
  }
  scrollLeft() {
    this.catagoryscroller.nativeElement.scrollBy({
      left: -320,
      behavior: 'smooth',
    });
  }

  constructor() {}

  ngOnInit(): void {}

  selectedCategory = '';

  categories = [
    { name: 'Phones', icon: 'smartphone' },
    { name: 'Computers', icon: 'computer' },
    { name: 'SmartWatch', icon: 'watch' },
    { name: 'Camera', icon: 'photo_camera' },
    { name: 'HeadPhones', icon: 'headphones' },
    { name: 'Gaming', icon: 'sports_esports' },
    { name: 'sofa', icon: 'weekend' },
    { name: 'bed', icon: 'bed' },
    { name: 'books', icon: 'menu_book' },
     { name: 'toys', icon: 'toys' },
  ];

  selectCategory(name: string): void {
    this.selectedCategory = name;
  }
}
