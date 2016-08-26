// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

/**
 * @param {string[]} words
 * @return {number}
 */
  var maxProduct = function(words) {
 	function check(str1,str2){
 		var tem1 = []
 		for(var i = 0;i<26;i++){
 			tem1[i] = 0
 		}
 		for (var i = 0; i < str1.length; i++) {
 			tem1[(str1.charCodeAt(i))-97]++;
 		}
 		for (var i = 0; i < str2.length; i++) {
 			if(tem1[(str2.charCodeAt(i))-97]!=0){return false;}
 		}
 		return true
 	}
 	for (var i = 0; i < elements.length; i++) {
 		expression
 	}
 	var res = 0
 	for (var i = 0; i < words.length; i++) {
 		for (var j = i+1; j < words.length; j++) {
 			if(check(words[i],words[j])){
 				len = words[i].length*words[j].length
 				res = res > len ? res : len
 			}
 		}
 	}
 	return res 
 };