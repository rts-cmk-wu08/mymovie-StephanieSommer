document.addEventListener("DOMContentLoaded", () => {
    let switchElm = document.querySelector(".switch>:first-child");

    console.log(switchElm);

    let setActiveStyleSheet = function (title) {
        let css = `link[rel="alternate stylesheet"]`;
        let stylesheets = document.querySelectorAll(css);
        stylesheets.forEach((sheet) => (sheet.disabled = true));
        let selector = `link[title="${title}"]`;
        let activeSheet = document.querySelector(selector);
        activeSheet.disabled = false;
        localStorage.setItem("theme", title);
    };

    let savedSheet = localStorage.getItem("theme");

    if (savedSheet) {
        if (savedSheet == "dark") {
            switchElm.checked = true;
        }
        setActiveStyleSheet(savedSheet);
    } else {
        setActiveStyleSheet("light");
    }

    switchElm.addEventListener("click", function (e) {
        if (e.target.checked) {
            setActiveStyleSheet("dark");
        } else {
            setActiveStyleSheet("light");
        }
    });
});
