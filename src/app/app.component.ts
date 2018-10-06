import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'devmeetings-angular';
  
products: Product[]=[
  {name:'apple',rank:5},
  {name:'paple'},
  {name:'maple'}];
}
