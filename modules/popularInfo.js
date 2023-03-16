// let popularInfoWrapper = document.createElement("div");
//                 popularInfoWrapper.classList.add("popularInfoWrapper");
// 
//                 popularInfoWrapper.innerHTML = `
//                 <h3 class="popularTitles">${result.title}</h3>
//                 <p class="ratings"><i class="fa-sharp fa-solid fa-star"></i> ${result.vote_average} /10 IMDb</p>
//                 <p class="genreText"></p>
//                 `;

// let popularInfoWrapper = function() {
//     let element = document.createElement("div")
//     element.classList.add("popularInfoWrapper")
// 
//     element.innerHTML = `
//     <h3 class="popularTitles">${result.title}</h3>
//     <p class="ratings"><i class="fa-sharp fa-solid fa-star"></i> ${result.vote_average} /10 IMDb</p>
//     <p class="genreText"></p>
//     `
// 
//     return element
// }

// export default popularInfoWrapper

// import { popularURL } from "/index.js"

let popularInfoWrapper = function() {

let element = document.createElement('div')
element.classList.add('popularInfoWrapper')

element.innerHTML = `
    <h3 class="popularTitles">${result.title}</h3>
    <p class="ratings"><i class="fa-sharp fa-solid fa-star"></i> ${result.vote_average} /10 IMDb</p>
    <p class="genreText"></p>
`

return element
}

export default popularInfoWrapper