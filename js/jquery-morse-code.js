/*
 * jQuery Morse Code
 * Encodes characters of a string into Morse Code and vice versa.
 *
 * Copyright (c) 2010, Murilo Santana <mvrilo@gmail.com>
 * Licensed under GPL <http://www.gnu.org/licenses/gpl.html>
 *
 * Example:
 *	$.morse('test', 'encode');	// to decode a string just change the second argument to 'decode'
 * or:
 *	$.morse('test');	// 'encode' is default
 * Returns:
 *	 - . ... -
 */
let dataInput, listUserChoice, list, morseSelection, userMorseSelection; 


function getMorseSelection()
{
	morseSelection = document.getElementById("morseSelection").value;
	document.getElementById('dataMorse').value = morseSelection;

	// FORCE l'option DECODE si un exemple de morse à été sélectionnée
	selectMorse = document.getElementById('selectMorse');
	selectMorse.selectedIndex = 1;
}



function listLaunch()
{
	selectMorse = document.getElementById('selectMorse');
	listUserChoice = selectMorse.options[selectMorse.selectedIndex].text;
	listUserChoice = listUserChoice.toLowerCase();
	// LAUNCH Function morseLaunch, méthode de chiffrement (encode/decode) est passée en paramètre.
	morseLaunch(listUserChoice);
}

function revealTextMorse()
{
	document.getElementById('morse').style.opacity = 0;
	$("#morse").animate({
		opacity: '1',
	});
}

// Récupère valeur de l'input de l'utilisateur 
// et lance la fonction JQuery qui va chiffrer les données.

// La méthode de chiffrement (encode/decode) est passée en paramètre.    
function morseLaunch(method){
	dataInput = document.getElementById("dataMorse").value;
	$j('#morse').html($j.morse(dataInput, method));
}

(function($){
	$j.extend({
		morse : function(string, option){

			// All characters based on Wikipedia <http://en.wikipedia.org/wiki/Morse_code#Letters.2C_numbers.2C_punctuation>
			var key = [' ','.',',','?',"'",'!','/','(',')','&',	// special chars
			':',';','=','+','-','_','"','$','@',			// special chars
			'0','1','2','3','4','5','6','7','8','9',		// numbers
			'ä','å','ç','š','ð','ś','ł','é','ñ','ŝ','þ','ü',	// few non-latin letters
			'a','b','c','d','e','f','g','h','i','j','k','l','m',	// letters
			'n','o','p','q','r','s','t','u','v','w','x','y','z'];	// letters

			var val = ['/','.-.-.-','--..--','..--..','.----.','-.-.--','-..-.','-.--.','-.--.-','.-...',	// special chars
			'---...','-.-.-.','-...-','.-.-.','-....-','..--.-','.-..-.','...-..-','.--.-.',		// special chars
			'-----','.----','..---','...--','....-','.....','-....','--...','---..','----.',		// numbers
			'.-.-','.--.-','-.-..','----','..--.','...-...','.-..-','..-..','--.--','...-.','.--..','..--',	// few non-latin letters
			'.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--',			// letters
			'-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];		// letters
			
			var str = string.toLowerCase();
			var enc = str.match(/[\-\.\/]+/g);
			var res = '&nbsp;';

			if (str.length === 0){
				return false;
			}

			if (option === "encode" || option === undefined){
				$j.each(str, function(index,value){
					var i = $.inArray(value, key);
					res += val[i] + ' ';
				});

				if (res.match(/undefined/gi)){
					res = '&nbsp;';
				}
			}
			else if (option === "decode"){
				if (!str.match(/[^\.\s\-\/]+/g)){
					$j.each(enc, function(index, value){
						var i = $.inArray(value, val);
						res += key[i];
						if (res.match(/undefined/gi)){
							res = '&nbsp;';
						}
					});
				}
			}
			else {
				res = 'error';
			}
			revealTextMorse();
			return res;
		}
	});
})(jQuery);
