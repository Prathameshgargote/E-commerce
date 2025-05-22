import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  imgArr: Array<any> = [];
  currentIndex = 0;

  constructor(private _homeservice: HomeService) {}

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
