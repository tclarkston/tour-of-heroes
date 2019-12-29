import { Component, OnInit } from '@angular/core';
import { HEROES } from '../models/mock-heroes';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero){
    if (this.selectedHero === hero){
      this.selectedHero = null;  
    }
    else{
      this.heroService.selectHero(hero);
      this.selectedHero = hero;
    }
  }

  getHeroes() : void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}