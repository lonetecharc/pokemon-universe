
class BaseUnit {
    url: String;
    name: String;
}

export class DamageRelationsUnit extends BaseUnit {
}

export class DamageRelations {
    half_damage_from: DamageRelationsUnit[];
    no_damage_from: DamageRelationsUnit[];
    half_damage_to: DamageRelationsUnit[];
    double_damage_from: DamageRelationsUnit[];
    no_damage_to: DamageRelationsUnit[];
    double_damage_to: DamageRelationsUnit[];
}

export class PokemonMoves extends BaseUnit {
}

export class Pokemon extends BaseUnit {
}

export class PokemonnWithSlot {
    slot: string;
    pokemon: Pokemon;
}

export class TypePokemon {
    name: String;
    damage_relations: DamageRelations;
    moves: PokemonMoves[];
    pokemon: PokemonnWithSlot[];
}

