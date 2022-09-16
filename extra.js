    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")
    
        
        // let popularHeadline = document.createElement("div")
        // popularHeadline.classList.add("popularHeadlineWrapper")
        //         popularHeadline.innerHTML = `
        //         <h2 class="popularHeadline">Popular</h2>
        //         <button class="seeMoreButton">See more</button>
        //         `   
        //     nowShowingElm.append(popularHeadline)
    
    // let popularMovies = document.createElement("div")
    // popularMovies.classList.add("popularMovies")
    // 
    // popularElm.append(popularMovies)
    
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