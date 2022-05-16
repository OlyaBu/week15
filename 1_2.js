function show() {

    switch (document.getElementById("theme").value) {
        case "dark":
            document.body.style.backgroundColor = "blue";
            break;
        case "light":
            document.body.style.backgroundColor = "grey";
            break;
        case "color":
            document.body.style.backgroundColor = "pink";
            break;
    }
}