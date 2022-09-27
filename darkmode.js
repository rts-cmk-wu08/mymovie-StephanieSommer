document.addEventListener("DOMContentLoaded", () => {
    
    let setActiveStyleSheet = function (title) {
        let css = `link[rel="alternate stylesheet"]`;
        let stylesheets = document.querySelectorAll(css);
        stylesheets.forEach((sheet) => (sheet.disabled = true));
        let selctor = `link[title="${title}"]`;
        let activeSheet = document.querySelector(selctor);
        activeSheet.disabled = false;
        localStorage.setItem("theme", title);
    };

    let savedSheet = localStorage.getItem("theme");
    if (savedSheet) {
        setActiveStyleSheet(savedSheet);
    } else {
        setActiveStyleSheet("light");
    }

    let lightBtnElm = document.querySelector('[data-mode="light"]');
    let darkBtnElm = document.querySelector('[data-mode="dark"]');

    lightBtnElm.addEventListener("click", function () {
        setActiveStyleSheet("light");
    });

    darkBtnElm.addEventListener("click", function () {
        setActiveStyleSheet("dark");
    });
});
