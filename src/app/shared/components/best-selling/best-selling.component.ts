import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.scss'],
})
export class BestSellingComponent implements OnInit {
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

  scrollRight() {
    this.scroller.nativeElement.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  }
  scrollLeft() {
    this.scroller.nativeElement.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  }
}
