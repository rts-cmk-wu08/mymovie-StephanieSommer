
let castSection = document.createElement("section");
castSection.classList.add("castSection");

main.append(castSection);

let castHeadlineWrapper = document.createElement("div");
castHeadlineWrapper.classList.add("castHeadlineWrapper");

castHeadlineWrapper.innerHTML = `
          <h2 class="castHeadline">Cast</h2>
          <button class="seeMoreButton">See more</button>
          `;
castSection.append(castHeadlineWrapper);

let castImgWrapper = document.createElement("div");
castImgWrapper.classList.add("castImgWrapper");

castImgWrapper.innerHTML = `
          <img src="" alt="">
          <p></p>
          `;
castSection.append(castImgWrapper);