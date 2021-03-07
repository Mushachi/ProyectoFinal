import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor( ) { }

  bigChart() {
    return [{
      name: 'America',
      data: [502, 625, 875, 968, 1002, 3658, 5426]
    }];
  }

  cards () {
    return [19, 25, 22, 26, 13, 30, 46];
  }

}
