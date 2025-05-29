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
  catagoryArr!: Array<string>;

  ngOnInit(): void {
    this.fetchallproject();
    this.catagorylistArr();
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

  catagorylistArr() {
    this._homeservice.getAllcatgory().subscribe((res) => {
      console.log(res);
      const categorySet = new Set(res.map((p) => p.category));
      this.catagoryArr = Array.from(categorySet);
      console.log(this.catagoryArr);

      // this.catData.push(this.allData.map((prod: any) => prod.category));
      // console.log(this.allData);

      // let list = this.catData.map((cat) => {
      //   return cat.category;
      // });
      // console.log(list);
    });
  }
}
