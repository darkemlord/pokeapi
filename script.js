const submit = document.querySelector("#submit");
const search = document.querySelector("#search");
const pokeContainer = document.querySelector(".pokemon-container");
const pokeName = document.querySelector(".name");
const picture = document.querySelector(".picture");

const getName = (pokemon) => {
  pokeName.innerHTML = pokemon.forms[0].name;
}

const getPicture = (pokemon) => {
  picture.src = pokemon.sprites.front_default;
}


const apiFetch = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}`);
    if (response.ok) {
      const jsonResponse = await response.json();
      //aca va mi codigo
      getName(jsonResponse);
      getPicture(jsonResponse);
      search.value = '';
    }
  } catch (error) {
    console.log(error)
  }
}

submit.addEventListener('click', apiFetch)
