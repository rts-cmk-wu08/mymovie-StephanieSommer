document.addEventListener("DOMContentLoaded", () => {

let imgPathShowing = "https://image.tmdb.org/t/p/original"
let myKey = "61b4cbd423cdfbcd59353195172df0dc"
let nowShowingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${myKey}&language=en-US&page=1`

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
                nowShowing.setAttribute("href", `details.html?id=${result.id}`)
    
                nowShowing.innerHTML = `  
                <img class="posters" src="${imgPathShowing + result.poster_path}" alt="">
                <h3 class="nowShowingTitles">${result.title}</h3>
                <p class="nowShowingRatings"><i class="fa-sharp fa-solid fa-star"></i> ${result.vote_average} /10 IMDb</p>
                `
            nowShowingWrapper.append(nowShowing)

        })  

    })



    

})