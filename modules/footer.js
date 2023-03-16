let footer = function() {

let element = document.createElement('footer')
element.classList.add('footer', 'flex')

element.innerHTML = `
    <a href="#"><i class="fa-solid fa-film"></i></a>
    <a href="#"><i class="fa-solid fa-ticket"></i></a>
    <a href="#"><i class="fa-regular fa-bookmark"></i></a>
`

return element
}

export default footer