import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/Interfaces/pokemon';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

dbGetPokemon = "http://localhost:3000/pokemon";

private pokemonSubj$: BehaviorSubject<Pokemon> = new BehaviorSubject({} as Pokemon);
pokemon$: Observable<Pokemon> = this.pokemonSubj$.asObservable();

constructor(private http: HttpClient) { }

getPokemon(){
  this.http.get<Pokemon>(this.dbGetPokemon).subscribe(data => {
    this.pokemonSubj$.next(data);
  });
}

}
