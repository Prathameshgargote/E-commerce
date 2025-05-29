import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Iproduct } from '../../model/product';
import { forkJoin, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss'],
})
export class ProductDashComponent implements OnInit {
  products: Iproduct[] = [];
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  catData: any[] = [];
  allData!: any[];
  catagory!: string;
  constructor(
    private _homeservice: HomeService,
    private _activeterouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeterouter.queryParams.subscribe(
      (res) => (this.catagory = res['catagory'])
    );
    if (this.catagory) {
      this.fetchBycatagory();
    } else {
      this.fetchProducts();
    }

    // this.fetchProducts();
  }

  fetchProducts(): void {
    this._homeservice
      .getAllProducts(this.currentPage, this.pageSize)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.products = [...this.products, ...res.data]; // append new data
          this.totalItems = res.total;
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        },
      });
  }

  fetchBycatagory() {
    this._homeservice.getproductbycat(this.catagory, '').subscribe((res) => {
      console.log(res);
      this.products=res
    });
  }

  onScroll(): void {
    if (this.products.length >= this.totalItems) return;
    this.currentPage++;
    this.fetchProducts();
  }
}
