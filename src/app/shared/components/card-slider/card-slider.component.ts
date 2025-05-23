import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
})
export class CardSliderComponent implements OnInit {
  productArr: any;
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
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
    this.scrollContainer.nativeElement.scrollBy({
      left: -320,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 320,
      behavior: 'smooth',
    });
  }
}
