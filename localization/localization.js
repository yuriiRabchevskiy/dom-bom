
var applyLanguage = function (lang) {
	alert('now language is: ' + lang);
}

var getCurrentLanguage = function () {
	var defaultLanguage = 'ua';
	var saved = getLocalStorage();
	return saved || defaultLanguage;
}

function initRadio() {
	var getRadio = document.getElementsByName('lang');
	for (var i = 0; i < getRadio.length; i++) {
		var elem = getRadio[i];
		elem.onclick = function (e) {
			var radio = e.target;
			if (radio.checked) {
				setLanguage(radio.value);
			}
		}
	}
}

function setLanguage(lang) {
	currentLang = lang;
	
	var lclass = document.getElementsByClassName('lang');
	for (var i = 0; i < lclass.length; i++) {
		var el = lclass[i];
		el.classList.remove('visible');
	}
	
	var langEls = document.getElementsByClassName('lang-' + lang);
	for (var i = 0; i < langEls.length; i++) {
		var element = langEls[i];
		element.classList.add('visible');
	}
}
var currentLang = getCurrentLanguage();

function saveLocalStorage() {
	localStorage.setItem('Lang', currentLang);
	alert('You save current language in LocalStorage')
}
function getLocalStorage() {
	localStorage.getItem('Lang');
	alert('In LocalStorage language is: ' + localStorage.getItem('Lang'));
}

// $<prefix> == DOMElement
var $save = document.querySelector('html body button#save')

$save.addEventListener('click', function () {
	saveLocalStorage();
});
initRadio();