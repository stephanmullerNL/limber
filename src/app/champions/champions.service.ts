import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor() {
  }

  getChampion(name) {
    return {
      name: "Medusa",
      
    }
  }
}
