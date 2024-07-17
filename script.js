const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';
const MAX_POKEMON_ID = 1025;
const NUMBER_OF_OPTIONS = 3;

let currentPokemon;

async function fetchPokemonData(id) {
    const response = await fetch(`${POKEMON_API_URL}/${id}`);
    return await response.json();
}

function getRandomPokemonId() {
    return Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function startNewRound() {
    const pokemonId = getRandomPokemonId();
    currentPokemon = await fetchPokemonData(pokemonId);
    
    const imageId = pokemonId.toString().padStart(3, "0");
    const pokemonSilhouette = document.getElementById('pokemon-silhouette');
    pokemonSilhouette.innerHTML = `
        <img class="hide" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png">
    `;

    const pokemonOptions = [currentPokemon.name];
    while (pokemonOptions.length < NUMBER_OF_OPTIONS) {
        const randomId = getRandomPokemonId();
        const randomPokemon = await fetchPokemonData(randomId);
        if (!pokemonOptions.includes(randomPokemon.name)) {
            pokemonOptions.push(randomPokemon.name);
        }
    }

    const optionsContainer = document.getElementById('pokemon-options');
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = shuffleArray(pokemonOptions);
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('game-result').textContent = 'Select an option';
}

function checkAnswer(selectedOption) {
    const resultElement = document.getElementById('game-result');
    if (selectedOption === currentPokemon.name) {
        resultElement.textContent = `Correct! It's ${currentPokemon.name}!`;
        document.querySelector('#pokemon-silhouette img').classList.remove('hide');
    } else {
        resultElement.textContent = "Wrong! Try again.";
    }
}

startNewRound();