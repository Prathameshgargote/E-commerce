import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  imgArr: Array<any> = [];
  currentIndex = 0;
  @ViewChild('carousel') carousel!: ElementRef;
  constructor(private _homeservice: HomeService) {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['‹', '›'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    this.fetchallproject();
  }

  fetchallproject() {
    this._homeservice.fetchAllProduct().subscribe((res) => {
      console.log(res);
      let productArr = res.data;
      console.log(productArr);
      this.imgArr = productArr.map((img: any) => {
        return img.images[0];
      });
      console.log(this.imgArr);
    });
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.imgArr.length) % this.imgArr.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.imgArr.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
