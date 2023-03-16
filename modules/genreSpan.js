import { genres } from "../genres.js"


let genreSpan = function(id) {

    let currentGenre = genres.find((genre) => genre.id == id);
    let element = document.createElement("span");
    element.classList.add("genreSpan");
    element.innerText = currentGenre.name;

return element
}

export default genreSpan