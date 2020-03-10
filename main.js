const inputBox = document.querySelector("#user-input");

/************************
 * DOM HELPER FUNCTIONS *
 ************************/

const printValue = function(str) {
	let element = document.createElement("li");
	element.innerText = str;
	document.querySelector("ul.result").appendChild(element);
}

const clearResults = function() {
	let elements = document.querySelectorAll("ul.result>li");
	for(element of elements) {
		element.remove();
	}
}

/***************************
 * EVENT HANDLER FUNCTIONS *
 ***************************/

const evBiggify = function(event) {
	if(!isNaN(inputBox.value)) {
		ify(biggify(Number(inputBox.value)));
	} else {
		ify(biggify(inputBox.value));
	}
}

const evNasafy = function(event) {
	if(isNaN(inputBox.value)) {
		out = nasafy(5);
	} else {
		out = nasafy(Number(inputBox.value));
	}
	let sout = '';
	for(item of out) {
		sout += item += '\n';
	}
	ify(sout);
}

const evCrazify = function(event) {
	ify(crazify(inputBox.value));
}

const evReversify = function(event) {
	ify(reversify(inputBox.value));
}

const evTitleify = function(event) {
	ify(titleify(inputBox.value));
}

const ify = function(value) {
	clearResults();
	if(value != '') {
		printValue(value);
	}
	inputBox.value = '';
	inputBox.focus();
}

/**************************
 * SET UP EVENT LISTENERS *
 **************************/

document.querySelector(".biggify").addEventListener("click", evBiggify);
document.querySelector(".nasafy").addEventListener("click", evNasafy);
document.querySelector(".crazify").addEventListener("click", evCrazify);
document.querySelector(".reversify").addEventListener("click", evReversify);
document.querySelector(".titleify").addEventListener("click", evTitleify);
