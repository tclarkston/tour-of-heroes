import { Component, OnInit } from '@angular/core';
import { HEROES } from '../models/mock-heroes';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {

  }

  onSelect(hero: Hero){
    if (this.selectedHero === hero){
      this.selectedHero = null;  
    }
    else{
      this.selectedHero = hero;
    }
  }
}