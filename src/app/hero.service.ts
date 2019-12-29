import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  
  constructor(private messageService: MessageService) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched heroes');
    return of(HEROES);
  }

  selectHero(hero: Hero) : void {
    this.messageService.add('Hero Selected: ' + hero.name);
  }
}
