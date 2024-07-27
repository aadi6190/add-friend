const buttons = document.querySelectorAll(".friend-btn");
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        if (this.classList.contains("cancel")) {
            this.classList.remove("cancel");
            this.textContent = "Add friend";
        } else {
            this.classList.add("cancel");
            this.textContent = "Cancel request";
        }
    });
});
