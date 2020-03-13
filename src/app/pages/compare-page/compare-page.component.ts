import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mcoc-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.scss']
})
export class ComparePageComponent implements OnInit {
  attacker: string;
  defender: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.attacker = this.route.snapshot.paramMap.get('attacker')
    this.defender = this.route.snapshot.paramMap.get('defender')
  }

}
