let header = function() {
    let element = document.createElement("header")
    element.classList.add("header")

    element.innerHTML = `
        <h1 class="myMoviesHeadline">MyMovies</h1>
        <div class="toggleSwitch flex">
        <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
        </label>
        </div>
        `

    return element
}

export default header