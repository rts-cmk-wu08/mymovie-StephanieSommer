

fetch(`https://api.themoviedb.org/3/movie/latest?api_key=61b4cbd423cdfbcd59353195172df0dc&language=en-US`)
.then(response => response.json())
.then(data => {
    console.log(data)



    let largeImg = document.createElement("div")
            largeImg.innerHTML = `
            <img src="" alt="">
            `
})







document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(window.location.search) 
    let name = params.get("name")
    console.log(name)

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)


            let pokemon = document.createElement("div")
            pokemon.innerHTML = `
             <h2>${data.name}</h2>
             <img src="${data.sprites.other.home.front_default}" alt="">
             
             `

            document.body.append(pokemon)

        })
})