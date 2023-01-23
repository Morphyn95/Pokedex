const grid = document.getElementById('grid')


fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then(response => response.json())
.then(data => {
    const results = data.results

    results.forEach((pokemon, index) => {
        const cell =document.createElement('div')
        cell.classList.add('item')
        const pokemonNumber = ++index
        
        const img = document.createElement('img')
        img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`
 
        const name = document.createElement('div')
        const pokemonName = pokemon.name
        // name.innerText = pokemonNumber + ' ' + pokemonName
        name.innerText = `#${pokemonNumber} ${pokemonName}`

        cell.appendChild(img)
        cell.appendChild(name)
        grid.appendChild(cell)
    });
})