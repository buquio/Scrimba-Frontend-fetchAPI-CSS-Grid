/*
    Pokedex
    
    Write an async function 
        that uses fetch() to fetch all Pokemon from pokemon.json
    
    Display all the Pokemon
        ID, English Name, 
        Type(s), 
        Stats: HP/Attack/Defense/Speed
*/
// my steps 
// 1. fetch the pokemon from local file pokemon.json-e.g line20
// 2. plan how you want the layout to be
// 3. design the layout either inside your index.html  or index.js e.g line26
// 4. call the fetch function + .then(allPokemon & perform a function line 40
//  + add it to body.innerHTML by mapping all the pokemon)


async function getAllPokemon() {
    let response = await fetch("pokemon.json")
    let data = await response.json()
    return data    
}
//select some attributes what the apokemon will have from the ones in the local api attributes.
function getPokemonHtml(aPokemon) {
    return `<div class="a-pokemon">
        <div class="a-pokemon-id">${aPokemon.id}</div>
        
        <div class="a-pokemon-name">${aPokemon.name.english}</div>
        <div class="a-pokemon-type">${aPokemon.type.join(' / ')}</div>
        
        <div class="a-pokemon-stat">HP: ${aPokemon.base.HP}</div>
        <div class="a-pokemon-stat">Attack: ${aPokemon.base.Attack}</div>
        <div class="a-pokemon-stat">Defense: ${aPokemon.base.Defense}</div>
        <div class="a-pokemon-stat">Speed: ${aPokemon.base.Speed}</div>
    </div>`
}

//display all pokemon by calling the getAllpokemon & .map
getAllPokemon()
.then(allPokemon => {
    // let samplePokemon = allPokemon[350]
    // console.log(samplePokemon)
    document.body.innerHTML = `<div class="my-pokedex">
        ${allPokemon.map(aPokemon => getPokemonHtml(aPokemon)).join('')}
    </div>`
})