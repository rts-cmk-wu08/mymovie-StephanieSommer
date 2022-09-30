document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    console.log(id);
    let imgPathShowing = "https://image.tmdb.org/t/p/w500";
    let myKey = "61b4cbd423cdfbcd59353195172df0dc";
    let detailsURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}&language=en-US`;
    let castCreditURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${myKey}&language=en-US`;

    // Laver en variable, henter div'en fra detail.html med classname wrapper
    let wrapperElm = document.querySelector(".wrapper");

    // Laver en header til hero
    let heroHeader = document.createElement("header");
    heroHeader.classList.add("heroHeader");
    wrapperElm.append(heroHeader);

    let trailerMovies = document.createElement("div")
    trailerMovies.classList.add("trailerMovies")
    heroHeader.append(trailerMovies)

    let arrowToggleElm = document.createElement("div")
    arrowToggleElm.classList.add("arrowToggle")
    arrowToggleElm.innerHTML = `
    <a href="./index.html"><i class="fa-solid fa-arrow-left-long"></i></a>
                <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
                </label>
    `
    heroHeader.append(arrowToggleElm)

    // Laver main elementet
    let main = document.createElement("main");
    main.classList.add("mainDetail");
    wrapperElm.append(main);

    // Laver en section til detajler
    let detailSection = document.createElement("section");
    detailSection.classList.add("detailSection");
    main.append(detailSection);

    // Laver en section til cast
    let castSection = document.createElement("section");
    castSection.classList.add("castSection");
    main.append(castSection);

    // Laver et fetch til video
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${myKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        // pop tager et specifikt et element/array og tager noget data derfra
            let trailers = data.results.pop()
            console.log(trailers)

            // let trailerMovies = document.createElement("div")
            trailerMovies.innerHTML = `
            <iframe width="100%" height="330" src="https://www.youtube.com/embed/${trailers.key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            `
        heroHeader.append(trailerMovies)
    })

    // Laver et fetch til al info indtil cast sectionen
    fetch(detailsURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let hours = Math.floor(data.runtime / 60);
            let minutes = data.runtime % 60;
            // let heroImg = new Image()
            // heroImg.src = imgPathShowing + data.backdrop_path
            // heroImg.classList.add("heroImg")
            // heroHeader.prepend(heroImg) 
            

            detailSection.innerHTML = `
      <div class="headlineWrapper flex spaceBetween">
      <h1 class="headline">${data.title}</h1>
      <i class="fa-regular fa-bookmark detailBookmark"></i>
      </div>
      <p class="ratings"><i class="fa-sharp fa-solid fa-star"></i> ${
          data.vote_average
      } /10 IMDb</p>
      <p class="genreText"></p>
      <div class="headlineInfo flex spaceBetween">
          <div class="length">
              <p class="headlineInfoText">Length</p>
              <p class="headlineTime">${hours + "h " + minutes + "min"}</p>
          </div>
          <div class="language">
              <p class="headlineInfoText">Language</p>
              <p class="languageText"></p>
          </div>
          <div class="releaseDate">
              <p class="headlineInfoText">Release Date</p>
              <p class="releaseText">${data.release_date}</p>
          </div>
      </div>
      <h2 class="descriptionHeadline">Description</h2>
      <p class="descriptionText">${data.overview}</p>
      `;

            // Henter .genreText og lavet et loop
            let genreElm = detailSection.querySelector(".genreText");

            data.genres.forEach((genre) => {
                let genreSpan = document.createElement("span");
                genreSpan.classList.add("genreSpan");
                genreSpan.innerText = genre.name;

                genreElm.append(genreSpan);
            });

            // Henter .languageText og laver et loop
            let languages = detailSection.querySelector(".languageText");

            data.spoken_languages.forEach((language) => {
                let languageSpan = document.createElement("span");
                languageSpan.classList.add("languageSpan");
                languageSpan.innerText = language.name;

                languages.append(languageSpan);
            });
        });

    // Laver et fetch til cast sectionen
    fetch(castCreditURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            //  Laver en wrapper til headline og button
            let castHeadlineWrapper = document.createElement("div");
            castHeadlineWrapper.classList.add(
                "castHeadlineWrapper",
                "flex",
                "spaceBetween"
            );

            castHeadlineWrapper.innerHTML = `
                <h2 class="castHeadline">Cast</h2>
                <button class="seeMoreButton">See more</button>
                `;
            castSection.append(castHeadlineWrapper);

            // Laver en wrapper til profilbillede og navn
            let imgNameWrapper = document.createElement("div");
            imgNameWrapper.classList.add("imgNameWrapper", "flex");
            castSection.append(imgNameWrapper);

            //  Laver et loop, henter img og navn
            data.cast.forEach((cast) => {
                let castSpan = document.createElement("span");
                castSpan.classList.add("castSpan");

                castSpan.innerHTML = `
            
            <img class="profilImg" src="${
                imgPathShowing + cast.profile_path
            }" alt="">
            <p class="profilName">${cast.name}</p>
            
            `;
                imgNameWrapper.append(castSpan);
            });
        });
});
