import { Component, OnInit } from '@angular/core';
import { PokemonTypes } from '../models/pokemontypes';
import { PokeTypesService } from '../services/poke-types/poke-types.service';
import { PokeTyepDetailsService } from '../services/poke-type-details/poke-type-details.service';
import { TypePokemon, DamageRelations, DamageRelationsUnit } from '../models/pokemontypedamages';
@Component({
  selector: 'app-poke-types',
  templateUrl: './poke-types.component.html',
  styleUrls: ['./poke-types.component.css']
})
export class PokeTypesComponent implements OnInit {
  private pokeType: PokemonTypes[];
  private pokeTypeDetails: TypePokemon;
  constructor(private pokeTypeService: PokeTypesService, private pokeTypeDetailsService: PokeTyepDetailsService) { }

  ngOnInit() {
    this.pokeTypeService.getPokemonTypes()
                        .subscribe(p => this.pokeType = p);
  }

  getDetails(url: string) {
    this.pokeTypeDetailsService.getPokemonTypeDetails(url)
                               .subscribe(p => this.pokeTypeDetails = p);
  }

}
