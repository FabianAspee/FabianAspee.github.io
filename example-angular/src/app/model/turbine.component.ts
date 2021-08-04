import { Component } from "@angular/core";
import { ConfigService } from "../config/config.service";


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    providers: [ConfigService],
    styleUrls: ['./heroes.component.css']
  })
  export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];
    editHero: Hero | undefined; // the hero currently being edited
  
    constructor(private heroesService: HeroesService) {}
  
    ngOnInit() {
      this.getHeroes();
    }