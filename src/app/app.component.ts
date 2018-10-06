import { Component } from '@angular/core';
interface Product{
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'devmeetings-angular';
  products: Product[]=[
    {name:'apple'},
    {name:'paple'},
    {name:'maple'}];
}
