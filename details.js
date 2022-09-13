document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(window.location.search)
    let name = params.get("name")
    console.log(name)

    fetch(`https://api.themoviedb.org/3/movie/latest?api_key=61b4cbd423cdfbcd59353195172df0dc&language=en-US`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
})