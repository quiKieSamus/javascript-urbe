const btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener('click', () => {
    const searchBox = document.querySelector(".input-search");
    const pokeContainer = document.querySelector(".poke-container");
    pokeContainer.style.display = "initial";
    pokeContainer.innerHTML = "";
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchBox.value}/`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            let pokeName = data.species.name;
            let pokeSpriteFront = data.sprites.front_default;
            let pokeSpriteBack = data.sprites.back_default;
            let pokeId = data.id;
            let pokeTypes = data.types;

            const pokeIdElm = document.createElement('p');
            pokeIdElm.innerHTML = pokeId;

            let pokeNameElm = document.createElement("h2");
            pokeNameElm.innerHTML = pokeName;

            let pokeImgElmFront = document.createElement("img");
            pokeImgElmFront.src = pokeSpriteFront;

            let pokeImgElmBack = document.createElement('img');
            pokeImgElmBack.src = pokeSpriteBack;

            let pokeTypeElm0 = document.createElement('p');
            pokeTypeElm0.innerHTML = pokeTypes[0].type.name;

            // let pokeType1bool = false;
            // console.log(pokeTypes[1]);
            // if (pokeTypes[1] !== 'undefined') {
            // let pokeTypeElm1 = document.createElement('p');
            // pokeTypeElm1.innerHTML = pokeTypes[1].type.name;
            // pokeType1bool = true;
            // }

            let pokeSpriteContainer = document.createElement('div');
            let pokeTypeContainer = document.createElement('div');

            pokeContainer.appendChild(pokeIdElm);
            pokeContainer.appendChild(document.createElement('hr'));
            pokeContainer.appendChild(pokeNameElm);
            pokeContainer.appendChild(pokeSpriteContainer);
            pokeContainer.appendChild(pokeTypeContainer);

            pokeSpriteContainer.appendChild(pokeImgElmBack);
            pokeSpriteContainer.appendChild(pokeImgElmFront);

            pokeTypeContainer.appendChild(pokeTypeElm0);
            // if (pokeType1bool === true) {
            // pokeTypeContainer.appendChild(pokeTypeElm1);
            // }
        });
});