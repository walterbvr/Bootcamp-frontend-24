import { PokemonType as PokemonTypeType } from '../types/pokemon';

function PokemonType({ types }: { types: PokemonTypeType[] }) {
    return (
        <div className="pokemon-types">
            {types.map(({ type }) => (
                <span key={type.name} className={`type ${type.name}`}>
                    {type.name}
                </span>
            ))}
        </div>
    );
}

export default PokemonType;
