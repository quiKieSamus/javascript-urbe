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
	constructor(pokemon, container) {
		this.pokemon = pokemon;
		this.container = container;
	}

	getContainer = () => {
		return this.container;
	}
	//method that generates card that will contain all of the pokemon data
	generatePokemonCard() {
		this.getContainer().innerHTML = "";

		const sectionId = this.createSection('id', 'h3');

		const sectionName = this.createSection('name', 'h1');

		const sectionImgFront = this.createSection('sprite', 'img', 0);

		const sectionImgBack = this.createSection('sprite', 'img', 1);

		const sectionType = this.createSection("type", "i");

		const sectionWeight = this.createSection("weight", "p");

		const sectionSkill = this.createSection("skills", 'h3');

		const sectionStats = this.createSection("stats", "h4"); 	

		//containers
		let pokeSpriteContainer = document.createElement('div');
		let pokeTypeContainer = document.createElement('div');
		let pokeSkillContainer = document.createElement('div');
		let pokeStatsContainer = document.createElement('div');

		// this.getContainer().appendChild(pokeIdElm);
		this.getContainer().appendChild(sectionId)
		this.getContainer().appendChild(document.createElement('hr'));
		this.getContainer().appendChild(sectionName);
		this.getContainer().appendChild(pokeSpriteContainer);
		const typeHeading = document.createElement('h3');
		typeHeading.innerHTML = "Types: "
		this.getContainer().appendChild(typeHeading);
		this.getContainer().appendChild(document.createElement('hr'));
		this.getContainer().appendChild(pokeTypeContainer);
		const skillHeading = document.createElement('h3');
		skillHeading.innerHTML = "Abilities: "
		this.getContainer().appendChild(skillHeading);
		this.getContainer().appendChild(document.createElement('hr'));
		this.getContainer().appendChild(pokeSkillContainer);
		const weightHeding = document.createElement('h3');
		weightHeding.innerHTML = "Weight: ";
		this.getContainer().appendChild(weightHeding);
		this.getContainer().appendChild(document.createElement('hr'));
		this.getContainer().appendChild(sectionWeight);
		const statsHeading = document.createElement("h3");
		statsHeading.innerHTML = "Stats: ";
		this.getContainer().appendChild(statsHeading);
		this.getContainer().appendChild(document.createElement("hr"))
		this.getContainer().appendChild(pokeStatsContainer);


		pokeTypeContainer.classList = "type-container";
		pokeSkillContainer.classList = "type-container";
		pokeStatsContainer.classList = "type-container stats";

		pokeSpriteContainer.appendChild(sectionImgFront);
		pokeSpriteContainer.appendChild(sectionImgBack);

	
		if (Array.isArray(sectionType)) {
			for (let i = 0; i < sectionType.length; i++) {
				pokeTypeContainer.appendChild(sectionType[i]);
			}
		} else {
			pokeTypeContainer.appendChild(sectionType);
		}

		if (Array.isArray(sectionSkill)) {
			for (let i = 0; i < sectionSkill.length; i++) {
				pokeSkillContainer.appendChild(sectionSkill[i]);
			}
		} else {
			pokeSkillContainer.appendChild(sectionSkill);
		}

		for (let i = 0; i < sectionStats.length; i++) {
			pokeStatsContainer.appendChild(sectionStats[i]);
		}

		this.getContainer().style.display = "block";
		return true;
	}

	//createSection method: creates a section (pokemon name, id, sprites, stats, etc...) on the poke-container card
	//Section parameter means what section will be created
	//el parameter defines the type of element in the html that will be the section
	//op parameter gives options for some sections such as in the sprite 
	createSection = (section, el, op) => {
		let elCreation = document.createElement(el)
		if (section === 'id') {
			elCreation.innerHTML = this.pokemon.getId();
		}
		if (section === 'name') {
			elCreation.innerHTML = this.pokemon.getName();
		}
		if (section === 'sprite') {
			op === 0 ? elCreation.src = this.pokemon.getSpriteFront() : elCreation.src = this.pokemon.getSpriteBack();
		}
		if (section === 'type') {
			if (typeof this.pokemon.getTypes(1) !== 'undefined') {
				elCreation = [document.createElement(el), document.createElement(el)];
				elCreation[0].innerHTML = this.pokemon.getTypes(0).type.name;
				elCreation[1].innerHTML = this.pokemon.getTypes(1).type.name;
			} else {
				elCreation.innerHTML = this.pokemon.getTypes(0).type.name;
			}
		}
		if (section === 'weight') {
			elCreation.innerHTML = this.pokemon.getWeight() / 10 + "Kg";
		}
		if (section === 'skills') {
			if (typeof this.pokemon.getSkills(1) !== 'undefined') {
				elCreation = [document.createElement(el), document.createElement(el)];
				for (let i = 0; i < elCreation.length; i++) {
					elCreation[i].innerHTML = this.pokemon.getSkills(i).ability.name;
				}
			} else {
				elCreation.innerHTML = this.pokemon.getSkills(0).ability.name;
			}
		}
		if (section === "stats") {
			elCreation = [];
			for (let i = 0; i < 6; i++) {
				elCreation.push(document.createElement(el))
			}

			for (let i = 0; i < 6; i++) {
				elCreation[i].innerHTML = `${this.pokemon.getStats(i).stat.name}: ${this.pokemon.getStats(i).base_stat}`;
			}
		}
		return elCreation;
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
			const pokeContainer = document.querySelector(".poke-container");

			//card created
			const card = new Card(pokemon, pokeContainer);
			card.generatePokemonCard();
		});

});
