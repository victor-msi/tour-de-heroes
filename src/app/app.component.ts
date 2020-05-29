import { Component,OnInit } from '@angular/core';
import { Hero } from './hero'; 
import { HeroServiceService } from './hero-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroServiceService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
 constructor( private heroService:HeroServiceService){
 }

 onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
ngOnInit(): void {
    this.getHeroes();
  }

getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}

}
