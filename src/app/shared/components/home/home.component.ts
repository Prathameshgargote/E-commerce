import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _homeservice: HomeService) {}
 productArr: Array<any> = [];
 
  ngOnInit(): void {
    this.fetchallproject()
  }

  fetchallproject() {
    this._homeservice.fetchAllProduct().subscribe((res) => {
      console.log(res);
      this.productArr = res.data;
      console.log(this.productArr);
      // this.imgArr = productArr.map((img: any) => {
      //   return img.images[0];
      // });
      // console.log(this.imgArr);
    });
  }
}
