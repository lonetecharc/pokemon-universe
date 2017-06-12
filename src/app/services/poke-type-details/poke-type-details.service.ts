import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TypePokemon, DamageRelations, DamageRelationsUnit, PokemonMoves, PokemonnWithSlot } from '../../models/pokemontypedamages';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class PokeTyepDetailsService {
  constructor(private http: Http) { }

  getPokemonTypeDetails(url: string): Observable<TypePokemon> {
    return this.http.get(url)
                    .map(mapTypeDetail)
                    .catch((error: any) => Observable.throw('Server error'));
  }

}

function mapTypeDetail(res: Response): TypePokemon {
    console.log('in map video damage', res.json());
    return toPokemonTypes(res.json());
  }

  function toPokemonTypes(r: any): TypePokemon {
    const damageRelation = <DamageRelations>({
      half_damage_from: r.damage_relations.half_damage_from,
      no_damage_from: r.damage_relations.no_damage_from,
      half_damage_to: r.damage_relations.half_damage_to,
      double_damage_from: r.damage_relations.double_damage_from,
      no_damage_to: r.damage_relations.no_damage_to,
      double_damage_to: r.damage_relations.double_damage_to
    });
    const arrPokemons: PokemonnWithSlot[] = [];

    r.pokemon.map((item: PokemonnWithSlot) => {
      const pokemons = <PokemonnWithSlot>({
        slot: item.slot,
        pokemon: item.pokemon
      });
      arrPokemons.push(pokemons)
    });

    const pokemonType = <TypePokemon>({
      name: r.name,
      damage_relations: damageRelation,
      moves: r.moves,
      pokemon: arrPokemons
    });
    console.log('final', pokemonType);
    return pokemonType;
  }
