import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
x;
  constructor(private route: ActivatedRoute,  private cartService: CartService) {}

 addToCart(obj) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(obj);
 }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
   this.x = products[+params.get('ID')];
  });
}
}
