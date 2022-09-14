    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")
    let imgPathPopular = "https://image.tmdb.org/t/p/w500"
    let popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US&page=1`
    



        let popularElm = document.createElement("section")
        popularElm.classList.add("popularElm")
        
        mainElm.append(popularElm)
        
        let popularHeadline = document.createElement("div")
        popularHeadline.classList.add("popularHeadlineWrapper")
                popularHeadline.innerHTML = `
                <h2 class="popularHeadline">Popular</h2>
                <button class="seeMoreButton">See more</button>
                `   
            nowShowingElm.append(popularHeadline)
    
    let popularMovies = document.createElement("div")
    popularMovies.classList.add("popularMovies")
    
    popularElm.append(popularMovies)
    
    fetch(popularURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    
        data.results.forEach(result => {
    
            let popular = document.createElement("a")
            popular.classList.add("popularWrapper")
            popular.setAttribute("href", `details.html?id=${result.id}`)
    
            popular.innerHTML = `
            <img class="popularPosters" src="${imgPathPopular + result.poster_path}" alt="">
            `
        })
    })