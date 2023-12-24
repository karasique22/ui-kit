const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach((input) => {
	input.addEventListener("input", () => {
		const errorLabel = input.nextElementSibling;

		if (input.value !== "4" && input.value !== "") {
			input.classList.add("error");
			input.classList.remove("correct");

			if (!errorLabel || !errorLabel.classList.contains("visible")) {
				const errorLabel = document.createElement("label");
				errorLabel.textContent = "Способ исправить ошибку";
				errorLabel.setAttribute("for", input.id);
				input.insertAdjacentElement("afterend", errorLabel);
				setTimeout(() => {
					errorLabel.classList.add("visible");
				}, 10);
			}
		} else {
			input.classList.add("correct");
			input.classList.remove("error");

			if (errorLabel && errorLabel.classList.contains("visible")) {
				errorLabel.classList.remove("visible");
				setTimeout(() => {
					errorLabel.remove();
				}, 300);
			}
		}

		if (input.value === "") {
			input.classList.remove("error");
			input.classList.remove("correct");

			if (errorLabel && errorLabel.classList.contains("visible")) {
				errorLabel.classList.remove("visible");
				setTimeout(() => {
					errorLabel.remove();
				}, 300);
			}
		}
	});
});
