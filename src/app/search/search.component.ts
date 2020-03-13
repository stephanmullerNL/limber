import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mcoc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() onSelect  = new EventEmitter<boolean>();

  champions = [
    {name: "Medusa", id: 'medusa'},
    {name: "Ultron", id: 'ultron'},
  ]

  constructor() { }

  ngOnInit() {
  }

  selectChampion(id) {
    console.log({id});
    this.onSelect.emit(id);
  }


}
