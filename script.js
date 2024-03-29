// inputs state

function debounce(func, delay) {
	let timeoutId;
	return function () {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(func, delay);
	};
}

const inputs = document.querySelectorAll(".input-state");

inputs.forEach((input) => {
	input.addEventListener(
		"input",
		debounce(() => {
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
		}, 300)
	);
});

function onClickSort1() {
	const popup = document.getElementById("popup1");
	popup.classList.toggle("visible");
}

function onClickClose1() {
	const popup = document.getElementById("popup1");
	popup.classList.remove("visible");
}

function onClickSort2() {
	const popup = document.getElementById("popup2");
	popup.classList.toggle("visible");
}

function onClickClose2() {
	const popup = document.getElementById("popup2");
	popup.classList.remove("visible");
}

// popup tags generation

function getRandomPopularity() {
	return Math.floor(Math.random() * 10) + 1;
}

const tags1 = [
	{
		id: 1,
		name: "гранж",
		popularity: getRandomPopularity(),
	},
	{
		id: 2,
		name: "оверсайз",
		popularity: getRandomPopularity(),
	},
	{
		id: 3,
		name: "винтаж",
		popularity: getRandomPopularity(),
	},
	{
		id: 4,
		name: "аксессуары",
		popularity: getRandomPopularity(),
	},
	{
		id: 5,
		name: "панк",
		popularity: getRandomPopularity(),
	},
	{
		id: 6,
		name: "дрейн",
		popularity: getRandomPopularity(),
	},
	{
		id: 7,
		name: "спортик",
		popularity: getRandomPopularity(),
	},
	{
		id: 8,
		name: "классика",
		popularity: getRandomPopularity(),
	},
	{
		id: 9,
		name: "эксперт",
		popularity: getRandomPopularity(),
	},
	{
		id: 10,
		name: "новичок",
		popularity: getRandomPopularity(),
	},
	{
		id: 11,
		name: "продвинутый",
		popularity: getRandomPopularity(),
	},
];

const tags2 = [
	{
		id: 1,
		name: "экология",
		popularity: getRandomPopularity(),
	},
	{
		id: 2,
		name: "эксперименты",
		popularity: getRandomPopularity(),
	},
	{
		id: 3,
		name: "бренды",
		popularity: getRandomPopularity(),
	},
	{
		id: 4,
		name: "тренды",
		popularity: getRandomPopularity(),
	},
	{
		id: 5,
		name: "материалы",
		popularity: getRandomPopularity(),
	},
	{
		id: 6,
		name: "эко-подход",
		popularity: getRandomPopularity(),
	},
	{
		id: 7,
		name: "советы",
		popularity: getRandomPopularity(),
	},
	{
		id: 8,
		name: "личный опыт",
		popularity: getRandomPopularity(),
	},
];

const popupTagsElements = document.querySelectorAll(".popup-tags");

tags1.sort((a, b) => b.popularity - a.popularity);
tags2.sort((a, b) => b.popularity - a.popularity);

popupTagsElements.forEach((popupTagsElement, index) => {
	const input = document.getElementById(`popup${index + 1}-input`);

	let tags;
	if (index === 0) {
		tags = tags1;
	} else if (index === 1) {
		tags = tags2;
	}

	for (let i = 0; i < tags.length; i++) {

		const tag = document.createElement("button");
		tag.classList.add("popup-tag");
		tag.classList.add("btn-tertiary1");
		tag.textContent = tags[i].name;

		tag.addEventListener("click", function () {
			if (input.value.includes(tags[i].name)) {
				input.value = input.value.replace(tags[i].name + " ", "");
			} else {
				input.value += tags[i].name + " ";
			}

			if (input.scrollWidth > input.offsetWidth) {
				input.scrollLeft = input.scrollWidth - input.offsetWidth;
			}
		});

		popupTagsElement.appendChild(tag);
	}
});
