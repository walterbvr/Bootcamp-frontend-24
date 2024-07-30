import PokemonText from './PokemonText';
import PokemonType from './PokemonType';
import PokemonImage from './PokemonImage';
import { Pokemon } from '../types/pokemon';

function PokemonCard({ pokemon }: { pokemon: Pokemon | null }) {
    if (!pokemon) return null;

    return (
        <div className="pokemon-card">
            <div className="pokemon-info">
                <PokemonText number={pokemon.id} name={pokemon.name} />
                <PokemonType types={pokemon.types} />
            </div>
            <PokemonImage id={pokemon.id} name={pokemon.name} />
        </div>
    );
}

export default PokemonCard;
