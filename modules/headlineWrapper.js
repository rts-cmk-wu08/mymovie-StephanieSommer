let headlineWrapper = function(text) {
    
    let element = document.createElement("header")
    element.classList.add("flex", "spaceBetween")

    element.innerHTML = `
    <h2 class="indexHeadline">${text}</h2>
    <button class="seeMoreButton">See more</button>
    `

    return element
}

export default headlineWrapper