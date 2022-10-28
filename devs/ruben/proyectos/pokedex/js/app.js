class Pokemon {
	constructor(id, name, types, spriteFront, spriteBack, skills, weight, stats) {
		this.id = id;
		this.name = name;
		this.types = types;
		this.spriteFront = spriteFront;
		this.spriteBack = spriteBack;
		this.skills = skills;
		this.weight = weight;
		this.stats = stats;
	}

	getName = () => {
		return this.name;
	}

	getId = () => {
		return this.id;
	}

	getTypes = (i) => {
		return this.types[i];
	}

	getSpriteFront = () => {
		return this.spriteFront;
	}

	getSpriteBack = () => {
		return this.spriteBack;
	}

	getSkills = (i) => {
		return this.skills[i];
	}

	getWeight = () => {
		return this.weight;
	}

	getStats = (i) => {
		return this.stats[i];
	}
}

const btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener('click', () => {
	const searchBox = document.querySelector(".input-search");
	const pokeContainer = document.querySelector(".poke-container");
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
			let pokeStats = data.stats;
			let pokeWeight = data.weight;
			let pokeSkills = data.abilities

			const pokemon = new Pokemon(pokeId, pokeName, pokeTypes, pokeSpriteFront, pokeSpriteBack, pokeSkills, pokeWeight, pokeStats);
			const pokeIdElm = document.createElement('p');
			pokeIdElm.innerHTML = pokemon.getId();

			let pokeNameElm = document.createElement("h2");
			pokeNameElm.innerHTML = pokemon.getName();

			let pokeImgElmFront = document.createElement("img");
			pokeImgElmFront.src = pokemon.getSpriteFront();

			let pokeImgElmBack = document.createElement('img');
			pokeImgElmBack.src = pokemon.getSpriteBack();

			let pokeTypeElm0 = document.createElement('p');
			pokeTypeElm0.innerHTML = pokemon.getTypes(0).type.name;

			let pokeWeightElm = document.createElement('p');
			pokeWeightElm.innerHTML = `${pokemon.getWeight() / 10}kg`;

			let pokeSkillElm0 = document.createElement('p');
			pokeSkillElm0.innerHTML = pokemon.getSkills(0).ability.name;

			let pokeType1bool = false;
			//checking if pokemon has a second type
			let pokeTypeElm1 = document.createElement('p');
			if (typeof pokemon.getTypes(1) !== 'undefined') {
				pokeTypeElm1.innerHTML = pokemon.getTypes(1).type.name;
				pokeType1bool = true;
			}

			let pokeSkill1bool = false;
			//checking if pokemon has a second ability
			let pokeSkillElm1 = document.createElement('p');
			if (typeof pokemon.getSkills(1) !== 'undefined') {
				pokeSkillElm1.innerHTML = pokemon.getSkills(1).ability.name;
				pokeSkill1bool = true;
			}

			let pokeSpriteContainer = document.createElement('div');
			let pokeTypeContainer = document.createElement('div');
			let pokeSkillContainer = document.createElement('div');

			pokeContainer.appendChild(pokeIdElm);
			pokeContainer.appendChild(document.createElement('hr'));
			pokeContainer.appendChild(pokeNameElm);
			pokeContainer.appendChild(pokeSpriteContainer);
			const typeHeading = document.createElement('h3');
			typeHeading.innerHTML = "Types: "
			pokeContainer.appendChild(typeHeading);
			pokeContainer.appendChild(document.createElement('hr'));
			pokeContainer.appendChild(pokeTypeContainer);
			const skillHeading = document.createElement('h3');
			skillHeading.innerHTML = "Abilities: "
			pokeContainer.appendChild(skillHeading);
			pokeContainer.appendChild(document.createElement('hr'));
			pokeContainer.appendChild(pokeSkillContainer);
			const weightHeding = document.createElement('h3');
			weightHeding.innerHTML = "Weight: ";
			pokeContainer.appendChild(weightHeding);
			pokeContainer.appendChild(document.createElement('hr'));
			pokeContainer.appendChild(pokeWeightElm);
			pokeTypeContainer.classList = "type-container";
			pokeSkillContainer.classList = "type-container"

			pokeSpriteContainer.appendChild(pokeImgElmBack);
			pokeSpriteContainer.appendChild(pokeImgElmFront);

			pokeTypeContainer.appendChild(pokeTypeElm0);
			if (pokeType1bool) {
				pokeTypeContainer.appendChild(pokeTypeElm1);
			}

			pokeSkillContainer.appendChild(pokeSkillElm0);
			if (pokeSkill1bool) {
				pokeSkillContainer.appendChild(pokeSkillElm1);
			}
			pokeContainer.style.display = "block";
		});

});