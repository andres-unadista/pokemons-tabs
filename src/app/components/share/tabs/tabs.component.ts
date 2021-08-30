import { Component, OnInit } from '@angular/core';

type Tab = 'tab-favorites' | 'tab-pokemons';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public currentTab: Tab = 'tab-favorites';

  constructor() { }

  ngOnInit(): void {
  }

}
