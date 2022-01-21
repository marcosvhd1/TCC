const btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", event => {
    event.preventDefault();

    const fields = [...document.querySelectorAll(".textfield input")];

    fields.forEach(field => {
        if (field.value === "") form.classList.add("validate-error");
    });

    const formError = document.querySelector(".validate-error");
    if (formError) {
        formError.addEventListener("animationend", event => {
            if (event.animationName === "nono") {
                formError.classList.remove("validate-error");
            }
        });

    } else {
        window.location.href = "../Dashboard/principal.html";
        form.classList.add("form-hide");
    }
});