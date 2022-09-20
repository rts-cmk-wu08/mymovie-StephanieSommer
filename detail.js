document.addEventListener("DOMContentLoaded", () => {

let params = new URLSearchParams(window.location.search)
let id = params.get("id")
console.log(id)
    
let imgPathShowing = "https://image.tmdb.org/t/p/w500"
let myKey = "61b4cbd423cdfbcd59353195172df0dc"
let largeImgURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}&language=en-US`
     
    
    // Laver en variable, henter main'en 
    let wrapperElm = document.querySelector(".wrapper")

    // Laver en section til img fetch'et
    let largeImgSection = document.createElement("section")
            largeImgSection.classList.add(largeImgSection)

        wrapperElm.append(largeImgSection)

    // Laver et fetch 
    fetch(largeImgURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)

                let largeImg = document.createElement("div")
                        largeImg.innerHTML = `
                        <img class="largeImg" src="${imgPathShowing + data.poster_path}" alt="">
                        `

                largeImgSection.append(largeImg)
            })

//     let detailWrapper = document.createElement("section")
//             detailWrapper.classList.add("detailWrapper")
// 
//             detailWrapper.innerHTML = `
//             <h1>Hej</h1>
//             `
// 
//     wrapperElm.append(detailWrapper)
    
})