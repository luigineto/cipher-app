$("#make").click(function() {
	userSentence = prompt("Enter your sencence:");
	runCipherFunctions();
});

$("#original").click(function() {
	alert(userSentence);
});

$("#cipher").click(function() {
	alert(cipherSentence);
});


var runCipherFunctions = function() {
	captalizeLetters(userSentence);
	reverseLetters(cipherSentence);
	cipherSentence = userSentence + cipherSentence;
	eighthLetter(userSentence);
	cipherSentence = cipherSentence.split('').reverse().join('')
	return(cipherSentence);
};

var captalizeLetters = function(sentence) {
	return cipherSentence = sentence.slice(0, 1).toUpperCase() + sentence.slice(-1).toUpperCase();
};

var reverseLetters = function(sentence) {
	return cipherSentence = cipherSentence.split('').reverse().join('');
};

var eighthLetter = function(sentence) {
	cipherSentence = sentence.charAt(sentence.length / 2) + cipherSentence;
};

var userSentence = "";
var cipherSentence = "";