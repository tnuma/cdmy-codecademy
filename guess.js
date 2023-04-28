// objects to store region and countries
const asia = {
	region: "Asia",
	countries: [
		"China",
		"India",
		"Indonesia",
		"Pakistan",
		"Bangladesh",
		"Japan",
		"Philippines",
		"Vietnam",
		"Turkey",
		"Iran",
	],
};
const northAmerica = {
	region: "North America",
	countries: [
		"United States",
		"Mexico",
		"Canada",
		"Guatemala",
		"Cuba",
		"Haiti",
		"Dominican Republic",
		"Honduras",
		"Jamaica",
		"El Salvador",
	],
};
const southAmerica = {
	region: "South America",
	countries: [
		"Brazil",
		"Colombia",
		"Argentina",
		"Peru",
		"Venezuela",
		"Chile",
		"Ecuador",
		"Bolivia",
		"Paraguay",
		"Uruguay",
	],
};
const europe = {
	region: "Europe",
	countries: [
		"Russia",
		"Germany",
		"United Kingdom",
		"France",
		"Italy",
		"Spain",
		"Ukraine",
		"Poland",
		"Romania",
		"Netherlands",
	],
};
const africa = {
	region: "Africa",
	countries: [
		"Nigeria",
		"Ethiopia",
		"Egypt",
		"Democratic Republic of the Congo",
		"South Africa",
		"Tanzania",
		"Kenya",
		"Algeria",
		"Sudan",
		"Uganda",
	],
};
const oceania = {
	region: "Oceania",
	countries: [
		"Australia",
		"Papua New Guinea",
		"New Zealand",
		"Fiji",
		"Solomon Islands",
		"Vanuatu",
		"Samoa",
		"Kiribati",
		"Tonga",
		"Micronesia",
	],
};
const middleEast = {
	region: "Middle East",
	countries: [
		"Saudi Arabia",
		"Iran",
		"Iraq",
		"Yemen",
		"Syria",
		"Jordan",
		"United Arab Emirates",
		"Israel",
		"Lebanon",
		"Oman",
	],
};
// list of all regions object
const regions = [
	asia,
	northAmerica,
	southAmerica,
	europe,
	africa,
	oceania,
	middleEast,
];

const quiz = document.getElementById("question-sentence");
const correctButton = document.getElementById("correct");
const wrongButton = document.getElementById("wrong");
const resetButton = document.getElementById("reset");
const judge = document.getElementById("judge");
const result = document.getElementsByClassName("result-text")[0];
const wl = document.getElementsByClassName('wl');
let userInput = "";
let quizCount = 1;
let wrongCount = 0;
let correctCount = 0;
// document.getElementById('wrong-count').innerHTML = wrongCount;

// function to select word from passed array, randomly.
const selectCountry = () => {
	// Array to store correct match of country and region
	const info = [];
	// select region from regions array
	const selectedRegion = regions[Math.floor(Math.random() * regions.length)];
	// add region and country to info array
	info.push(selectedRegion.region);
	info.push(selectedRegion.countries[Math.floor(Math.random() * 10)]);
	return info;
};

const generateRandomQuiz = (arr) => {
	const qRegion = regions[Math.floor(Math.random() * 7)].region;
	return [`${arr[1]} is a country in ${qRegion}`, qRegion];
};

const generateQuizSet = () => {
	country = selectCountry();
	question = generateRandomQuiz(country);
	return {
		quiz: question[0],
		quizCountry: country[1],
		quizRegion: question[1],
		correctRegion: country[0],
	};
};

let quizSet = generateQuizSet();
console.log(quizSet);

const showQuiz = () => {
	quiz.innerHTML = `Q${quizCount}. ${quizSet.quizCountry} is in ${quizSet.quizRegion}`;
};

const showAnswer = (quizSet) => {
	judge.innerHTML = `${quizSet.quizCountry} is in ${quizSet.correctRegion}`;
};

const judgeInput = (quizSet) => {
	if (
		(quizSet.quizRegion === quizSet.correctRegion && userInput === "y") ||
		(quizSet.quizRegion !== quizSet.correctRegion && userInput === "n")
	) {
		judge.innerHTML = ''
		updateCorrectCount();
	} else {
		showAnswer(quizSet);
		updateWrongCount();
	}
};

const updateCorrectCount = () => {
	correctCount++;
	document.getElementById("correct-count").innerHTML = correctCount;
};
const updateWrongCount = () => {
	wrongCount++;
	document.getElementById("wrong-count").innerHTML = wrongCount;
};

const isCountFive = () => {
	if (correctCount === 5) {
		wl[0].classList.toggle("none");
		result.classList.toggle("none");
		return true;
	} else if (wrongCount === 5) {
		wl[1].classList.toggle("none");
		result.classList.toggle("none");
		return true;
	}
	return false;
};

const startQuiz = () => {
	if (isCountFive()) {
		quizCount = 1;
		correctCount = 0;
		wrongCount = 0
		userInput = ''
		correctButton.classList.toggle("none");
		wrongButton.classList.toggle("none");
		resetButton.classList.toggle("none");
		quiz.innerHTML = "";
		console.log(quizCount, correctCount, wrongCount);
	} else {
		showQuiz();
	}
};

const showNextQuiz = () => {
	judgeInput(quizSet);
	quizSet = generateQuizSet();
	quizCount++;
	startQuiz();
}

correctButton.addEventListener("click", function () {
	userInput = "y";
	showNextQuiz();
});

wrongButton.addEventListener("click", function () {
	userInput = "n";
	showNextQuiz();
});

resetButton.addEventListener("click", function () {
	quizCount = 1;
	correctCount = 0;
	wrongCount = 0;
	userInput = "";
	quizSet = generateQuizSet()
	result.classList.toggle("none");
	wl[0].classList.add('none')
	wl[1].classList.add('none')
	correctButton.classList.toggle("none");
	wrongButton.classList.toggle("none");
	resetButton.classList.toggle("none");
	document.getElementById("correct-count").innerHTML = correctCount;
	document.getElementById("wrong-count").innerHTML = wrongCount;
	startQuiz();
});

startQuiz();