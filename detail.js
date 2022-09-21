document.addEventListener("DOMContentLoaded", () => {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  console.log(id);

  let imgPathShowing = "https://image.tmdb.org/t/p/w500";
  let myKey = "61b4cbd423cdfbcd59353195172df0dc";
  let largeImgURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}&language=en-US`;
  let castCreditURL = `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${myKey}&language=en-US`;

  // Laver en variable, henter div'en fra detail.html med classname wrapper
  let wrapperElm = document.querySelector(".wrapper");

  // Laver et fetch til det store billede i headeren
  fetch(largeImgURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Laver en header til img fetch'et
      let heroHeader = document.createElement("header");
      heroHeader.classList.add("heroHeader");

      heroHeader.innerHTML = `
            <img src="${imgPathShowing + data.backdrop_path}" alt="">
            `;
      wrapperElm.append(heroHeader);

      // Laver main elementet
      let main = document.createElement("main");
      console.log(main)

      wrapperElm.append(main);

      let hours = Math.floor(data.runtime / 60);
      let minutes = data.runtime % 60;

      // Laver en section til headline text
      let headlineSection = document.createElement("section");
      headlineSection.classList.add("headlineSection");

      headlineSection.innerHTML = `
            <div class="headlineWrapper">
            <h1 class="headline">${data.title}</h1>
            <i class="fa-regular fa-bookmark"></i>
            </div>
            <p class="ratings"><i class="fa-sharp fa-solid fa-star"></i> ${
              data.vote_average
            } /10 IMDb</p>
            <p class="genreText"></p>
            <div class="headlineInfo">
                <div class="length">
                    <p class="headlineInfoText">Length</p>
                    <p class="headlineTime">${
                      hours + "h " + minutes + "min"
                    }</p>
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
            <section class="cast"></section>
            `;
      main.append(headlineSection);

      let genreElm = headlineSection.querySelector(".genreText");

      data.genres.forEach((genre) => {
        let genreSpan = document.createElement("span");
        genreSpan.classList.add("genreSpan");
        genreSpan.innerText = genre.name;

        genreElm.append(genreSpan);
      });

      let languages = headlineSection.querySelector(".languageText");

      data.spoken_languages.forEach((language) => {
        let languageSpan = document.createElement("span");
        languageSpan.classList.add("languageSpan");
        languageSpan.innerText = language.name;

        languages.append(languageSpan);
      });

      
    });

    let castElm = main.querySelector(".cast")
    console.log(castElm)

  fetch(castCreditURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
// 
//       data.cast.forEach((result) => {
//         let castSpan = document.createElement("span");
//         castSpan.innerText;
//       });
    });
});
