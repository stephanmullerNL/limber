import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mcoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'limber';
  compare = [];

  constructor(private router: Router) { }

  onSelectChampion(id, value) {
    this.compare[id] = value;

    const [attacker, defender] = this.compare;

    if(attacker && defender) {
      this.router.navigateByUrl(`/matchup/${attacker}/against/${defender}`)
    }
  }
}
