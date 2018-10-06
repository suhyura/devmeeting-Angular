import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
constructor(private http: HttpClient) { }

    public getProducts() {
       return  this.http.get<Product[]>('https://shining-torch-4509.firebaseio.com/products.json');
    }
}
