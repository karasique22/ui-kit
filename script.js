function debounce(func, delay) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}

const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach((input) => {
    input.addEventListener("input", debounce(() => {
        const errorLabel = input.nextElementSibling;
        let errorMessage = "";

        if (input.value !== "4" && input.value !== "") {
            errorMessage = "Способ исправить ошибку";
        } else if (input.value === "") {
            errorMessage = "Не заполнено поле";
        }

		if (errorLabel && errorLabel.classList.contains("visible")) {
			errorLabel.classList.remove("visible");
			setTimeout(() => {
				errorLabel.remove();
			}, 300);
		}

        if (errorMessage !== "") {
            input.classList.add("error");
            input.classList.remove("correct");

            const newErrorLabel = document.createElement("label");
            newErrorLabel.textContent = errorMessage;
            newErrorLabel.setAttribute("for", input.id);
            input.insertAdjacentElement("afterend", newErrorLabel);
            setTimeout(() => {
                newErrorLabel.classList.add("visible");
            }, 10);
        } else {
            input.classList.add("correct");
            input.classList.remove("error");
        }
    }, 300));
});