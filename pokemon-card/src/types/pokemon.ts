export type Pokemon = {
    id: number;
    name: string;
    types: PokemonType[];
}

export type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}
