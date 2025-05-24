import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
})
export class CardSliderComponent implements OnInit {
  productArr: any;
  @ViewChild('scroller', { static: false }) scroller!: ElementRef;
  constructor(private _homeservice: HomeService) {}

  ngOnInit(): void {
    this.fetchallproject();
  }
  fetchallproject() {
    this._homeservice.fetchAllProduct().subscribe((res) => {
      console.log(res);
      this.productArr = res.data;
      console.log(this.productArr);
    });
  }

  scrollLeft() {
    this.scroller.nativeElement.scrollBy({
      left: -320,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.scroller.nativeElement.scrollBy({
      left: 320,
      behavior: 'smooth',
    });
  }
}
