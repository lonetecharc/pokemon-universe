import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PokemonTypes } from '../../models/pokemontypes';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class PokeTypesService {
  private pokeUri = 'http://pokeapi.co/api/v2';

  constructor(private http: Http) { }

  getPokemonTypes(): Observable<PokemonTypes[]> {
    return this.http.get(`${this.pokeUri}/type`)
                    .map(mapTypes)
                    .catch((error: any) => Observable.throw('Server error'));
  }

}

function mapTypes(res: Response): PokemonTypes[] {
    console.log('in map video', res.json().results);
    res.json().results.map((item: PokemonTypes) => {
      console.log(item.url);
    });

    return res.json().results.map(toPokemonTypes);
  }

  function toPokemonTypes(r: any): PokemonTypes {
    const pokemonType = <PokemonTypes>({
      name: r.name,
      url: r.url
    });
    return pokemonType;
  }
