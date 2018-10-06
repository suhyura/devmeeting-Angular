import { Injectable } from "@angular/core";

@Injectable()
export class Productrepository {
    public getProducts(): Product[] {
        return [
            {name: 'apple', rank: 5},
            {name: 'paple', rank: 10},
            {name: 'maple', rank: 13},
            {name: 'pineaple', rank: 3},
          ];
    }
}
