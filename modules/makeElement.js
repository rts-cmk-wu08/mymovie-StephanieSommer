export let makeElement = function (elmName, className) {
    // console.log(className)
    let element = document.createElement(elmName);
    element.classList.add(className);
    return element
};
