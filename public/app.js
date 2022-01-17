// PK IMG EXAMPLE
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png

let btnGeneratePokemon = document.getElementById("generate-pokemon");

btnGeneratePokemon.addEventListener("click", generatePokemon);

function generatePokemon() {
    
    // Axios replacing fetch API consume 
    const getPokemonAxios = async (idPoke) => {
        console.clear();
        try {
            const resPoke = await axios(`https://pokeapi.co/api/v2/pokemon/${idPoke}`);

            console.log(
                `Name: ${resPoke.data.name}\nOrder: ${idPoke}\nTypes: ${resPoke.data.types.length}\nHeight: ${resPoke.data.height}\nWeight: ${resPoke.data.weight}`);
        } catch (error) {
            console.log(error);
        }
    }

    getPokemonAxios(Math.floor(Math.random() * 898) + 1);
}

  