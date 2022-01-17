// PK IMG EXAMPLE
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png

let btnGeneratePokemon = document.getElementById("generate-pokemon");
let bottomResultadoContainer = document.getElementById("bottom-container-content");
let topResultadoContainer = document.getElementById("top-container-content");

btnGeneratePokemon.addEventListener("click", generatePokemon);

function generatePokemon() {
    console.clear();
    // Generate random number
    let randomNumber = Math.floor(Math.random() * 898) + 1;
    // Axios replacing fetch API consume 
    const getPokemonAxios = async (idPoke) => {
        try {
            const resPoke = await axios(`https://pokeapi.co/api/v2/pokemon/${idPoke}`);

            // console.log(
            //     `Name: ${resPoke.data.name}\nOrder: ${idPoke}\nTypes: ${resPoke.data.types.length}\nHeight: ${resPoke.data.height}\nWeight: ${resPoke.data.weight}`);

            printPokee();

            // <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPoke}.png" alt="${resPoke.data.name} image" width="96" height="96"></img>

            function printPokee() {
                // console.log(`Name: ${resPoke.data.name}`);
                bottomResultadoContainer.innerHTML = '';
                topResultadoContainer.innerHTML = '';
                topResultadoContainer.innerHTML += `
                    <div class="d-flex flex-column p-3">
                        <div class="row flex-column align-items-start">
                            <h1>${resPoke.data.name}</h1>
                            <h3>#${idPoke}</h3>
                        </div>
                        <div class="row justify-content-center"> 
                            <img class="img-pokemon mt-3" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPoke}.png" alt="${resPoke.data.name} image" width="200" height="200"></img>
                        </div>
                    </div>
                `;
                bottomResultadoContainer.innerHTML += `
                    <div class="d-flex flex-column">
                        <p class="poke-text"><span>Name:</span> ${resPoke.data.name}</p>
                        <p class="poke-text"><span>Pokedex:</span> ${idPoke}</p>
                        <p class="poke-text"><span>Types:</span> ${resPoke.data.types.length}</p>
                        <p class="poke-text"><span>Height:</span> ${resPoke.data.height}</p>
                        <p class="poke-text"><span>Weight:</span> ${resPoke.data.weight}</p>
                    </div>
                `;
            }
        } catch (error) {
            console.log(error);
        }
    }

    getPokemonAxios(randomNumber);
}