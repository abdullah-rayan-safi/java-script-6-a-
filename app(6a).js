const modeBtn = document.querySelector("#modeBtn");
const body = document.body;

modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        modeBtn.classList.replace("fa-sun", "fa-moon");
    } else {
        modeBtn.classList.replace("fa-moon", "fa-sun");
    }
});
