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

class Card {
	constructor(pokemon)  {
		this.pokemon = pokemon;
	}

	//method that generates card that will contain all of the pokemon data
	generatePokemonCard() {
		const pokeContainer = document.querySelector(".poke-container");
		pokeContainer.innerHTML = "";
		const pokeIdElm = document.createElement('p');
		pokeIdElm.innerHTML = this.pokemon.getId();

		let pokeNameElm = document.createElement("h2");
		pokeNameElm.innerHTML = this.pokemon.getName();

		let pokeImgElmFront = document.createElement("img");
		pokeImgElmFront.src = this.pokemon.getSpriteFront();

		let pokeImgElmBack = document.createElement('img');
		pokeImgElmBack.src = this.pokemon.getSpriteBack();

		let pokeTypeElm0 = document.createElement('p');
		pokeTypeElm0.innerHTML = this.pokemon.getTypes(0).type.name;

		let pokeWeightElm = document.createElement('p');
		pokeWeightElm.innerHTML = `${this.pokemon.getWeight() / 10}kg`;

		let pokeSkillElm0 = document.createElement('p');
		pokeSkillElm0.innerHTML = this.pokemon.getSkills(0).ability.name;

		let pokeType1bool = false;
		//checking if pokemon has a second type
		let pokeTypeElm1 = document.createElement('p');
		if (typeof this.pokemon.getTypes(1) !== 'undefined') {
			pokeTypeElm1.innerHTML = this.pokemon.getTypes(1).type.name;
			pokeType1bool = true;
		}

		let pokeSkill1bool = false;
		//checking if pokemon has a second ability
		let pokeSkillElm1 = document.createElement('p');
		if (typeof this.pokemon.getSkills(1) !== 'undefined') {
			pokeSkillElm1.innerHTML = this.pokemon.getSkills(1).ability.name;
			pokeSkill1bool = true;
		}

		//containers
		let pokeSpriteContainer = document.createElement('div');
		let pokeTypeContainer = document.createElement('div');
		let pokeSkillContainer = document.createElement('div');
		let pokeStatsContainer = document.createElement('div');

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
		const statsHeading = document.createElement("h3");
		statsHeading.innerHTML = "Stats: ";
		pokeContainer.appendChild(statsHeading);
		pokeContainer.appendChild(document.createElement("hr"))
		pokeContainer.appendChild(pokeStatsContainer);


		for (let i = 0; i < 6; i++) {
			if (i === 0) {
				pokeStatsContainer.innerHTML = `${this.pokemon.getStats(i).stat.name}: ${this.pokemon.getStats(i).base_stat}`;
			}
			if (i !== 0) {
				pokeStatsContainer.innerHTML += `<br>${this.pokemon.getStats(i).stat.name}: ${this.pokemon.getStats(i).base_stat}`;
			}

		}

		pokeTypeContainer.classList = "type-container";
		pokeSkillContainer.classList = "type-container";
		pokeStatsContainer.classList = "type-container stats";

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
		return true;
	}
}

const btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener('click', () => {
	const searchBox = document.querySelector(".input-search");


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
			let pokeSkills = data.abilities;

			//pokemon created
			const pokemon = new Pokemon(pokeId, pokeName, pokeTypes, pokeSpriteFront, pokeSpriteBack, pokeSkills, pokeWeight, pokeStats);
			
			
			//card created
			const card = new Card(pokemon);
			card.generatePokemonCard();
		});

});
