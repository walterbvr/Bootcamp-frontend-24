function PokemonImage({ id, name }: { id: number; name: string }) {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return <img src={imageUrl} alt={name} className="pokemon-image" />;
}

export default PokemonImage;
