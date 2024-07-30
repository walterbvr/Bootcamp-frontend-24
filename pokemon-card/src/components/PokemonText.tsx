function PokemonText({ number, name }: { number: number; name: string }) {
    return (
        <div className="pokemon-text">
            <h2>#{number.toString().padStart(3, '0')}</h2>
            <h1>{name}</h1>
        </div>
    );
}

export default PokemonText;
