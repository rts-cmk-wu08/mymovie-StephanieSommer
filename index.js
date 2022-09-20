document.addEventListener("DOMContentLoaded", () => {

let imgPathPopular = "https://image.tmdb.org/t/p/w500"
let imgPathShowing = "https://image.tmdb.org/t/p/original"
let myKey = "61b4cbd423cdfbcd59353195172df0dc"
let nowShowingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${myKey}&language=en-US&page=1`
let popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US&page=1`


    // Laver en variable, henter div'en fra index.html med classname wrapper 
    let wrapperElm = document.querySelector(".wrapper")

    // Laver en header med en h1'er
    let header = document.createElement("header")
            header.innerHTML = `
                <h1 class="myMoviesHeadline">MyMovies</h1>
                `
        wrapperElm.append(header)

    // Laver main elementet
    let main = document.createElement("main")
    
        wrapperElm.append(main)

    // Laver en section til Now Showing fetchet
    let nowShowingSection = document.createElement("section")
            nowShowingSection.classList.add("nowShowingSection")
        
        main.append(nowShowingSection)

    // Laver en wrapper til headline og button
    let nowShowingHeadlineWrapper = document.createElement("div")
            nowShowingHeadlineWrapper.classList.add("nowShowingHeadlineWrapper")
                nowShowingHeadlineWrapper.innerHTML = `
                <h2 class="nowShowingHeadline">Now Showing</h2>
                <button class="seeMoreButton">See more</button>
                `
        nowShowingSection.append(nowShowingHeadlineWrapper)

    // Laver en wrapper for img, headline og paragraph
    let nowShowingWrapper = document.createElement("div")
            nowShowingWrapper.classList.add("nowShowingWrapper")
        
        nowShowingSection.append(nowShowingWrapper)

    // Laver et fetch til nowShowing wrapperen
    fetch(nowShowingURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        
            data.results.forEach(result => {

                let nowShowing = document.createElement("a")
                nowShowing.classList.add("nowShowing")
                nowShowing.setAttribute("href", `detail.html?id=${result.id}`)
    
                nowShowing.innerHTML = `  
                <img class="posters" src="${imgPathShowing + result.poster_path}" alt="">
                <h3 class="nowShowingTitles">${result.title}</h3>
                <p class="ratings"><i class="fa-sharp fa-solid fa-star"></i> ${result.vote_average} /10 IMDb</p>
                `
            nowShowingWrapper.append(nowShowing)

        })  

    })

    // Laver en section til Popular fetchet
    let popularSection = document.createElement("section")
            popularSection.classList.add("popularSection")
    
        main.append(popularSection)

    // Laver en wrapper til headline og button
    let popularHeadlineWrapper = document.createElement("div")
            popularHeadlineWrapper.classList.add("popularHeadlineWrapper")

            popularHeadlineWrapper.innerHTML = `
            <h2 class="popularHeadline">Popular</h2>
            <button class="seeMoreButton">See more</button>
            `
        popularSection.append(popularHeadlineWrapper)


    // Laver en wrapper for img, headline og paragraph
    let popularWrapper = document.createElement("div")
            popularWrapper.classList.add("popularWrapper")
        
        popularSection.append(popularWrapper)


    // Laver et fetch til popular wrapperen
    fetch(popularURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)

        data.results.forEach(result => {

            let popular = document.createElement("a")
                    popular.classList.add("popular")
                    popular.setAttribute("href", `details.html?id=${result.id}`)

                popular.innerHTML = `  
                <img class="popularImages" src="${imgPathPopular + result.poster_path}" alt="">
                `
            popularWrapper.append(popular)

        let popularInfoWrapper = document.createElement("div")
                popularInfoWrapper.classList.add("popularInfoWrapper")

                popularInfoWrapper.innerHTML =  `
                <h3 class="popularTitles">${result.title}</h3>
                <p class="ratings"><i class="fa-sharp fa-solid fa-star"></i> ${result.vote_average} /10 IMDb</p>
                <p class="genreText"></p>
                `
            popular.append(popularInfoWrapper)

            // Laver en forEach til at hente genre
            let genreElm = popularInfoWrapper.querySelector(".genreText")
                console.log(genreElm)

                result.genre_ids.forEach(id => {
                    
                    let currentGenre =  genres.find(genre => genre.id == id)
                    let genreSpan = document.createElement("span")
                    genreSpan.classList.add("genreSpan")
                    genreSpan.innerText = currentGenre.name
                    
                genreElm.append(genreSpan)

            })
        })   
    })

    // Laver en footer
    let footer = document.createElement("footer")
            footer.classList.add("footer")
            
            footer.innerHTML = `
            <a href="./detail.html"><i class="fa-solid fa-film"></i></a>
            <a href="#"><i class="fa-solid fa-ticket"></i></a>
            <a href="#"><i class="fa-regular fa-bookmark"></i></a>
            `
            wrapperElm.append(footer)
})