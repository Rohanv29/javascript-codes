const buttons = document.querySelectorAll(".boxes button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        if (button.classList.contains("redbox")) {
            document.body.style.backgroundColor = "red";
        }

        else if (button.classList.contains("bluebox")) {
            document.body.style.backgroundColor = "blue";
        }

        else if (button.classList.contains("greenbox")) {
            document.body.style.backgroundColor = "green";
        }

        else if (button.classList.contains("whitebox")) {
            document.body.style.backgroundColor = "white";
        }
    });
});