document.addEventListener("DOMContentLoaded", () => {

let section = document.querySelector("section")
let imgPath = "https://image.tmdb.org/t/p/original"
let myKey = "61b4cbd423cdfbcd59353195172df0dc"
let URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${myKey}&language=en-US&page=1`

fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data)
    
    let headline = document.createElement("h1")
         headline.innerHTML = `
            <h1 class="moviesHeadline">MyMovies</h1>
            `
    section.append(headline)

    
        data.results.forEach(result => {

            let nowShowing = document.createElement("div")
            section.classList.add("abcde")

            nowShowing.innerHTML = `
            <img src="${imgPath + result.poster_path}" alt="">
            <h3>${result.title}</h3>
            <p>${result.vote_average}</p>
            `
            section.append(nowShowing)
            
        })
    })
})