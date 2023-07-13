import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { MainService } from './service/main.service';
import { Pokemon } from '../Interfaces/pokemon';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  aux!: Pokemon;
  private pokemon$: BehaviorSubject<Pokemon> = new BehaviorSubject({} as Pokemon);

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private mainService: MainService,
  ) {
    this.matIconRegistry.addSvgIcon(
      "pokeball",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pokeball.svg")
    );
  }

  async ngOnInit() {
    this.search();

  }

  search() {
    // return this.mainService.getPokemon().subscribe(
    //   (data: Pokemon) => { this.aux = data }
    // )
  }

}
