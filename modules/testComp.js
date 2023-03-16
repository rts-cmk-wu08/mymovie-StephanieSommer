let testComp = function() {

let element = document.createElement('div')
element.classList.add('test')

element.innerHTML = `
    <h1>Hej</h1>
`

return element
}

export default testComp