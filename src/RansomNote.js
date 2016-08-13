
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

 var canConstruct = function(ransomNote, magazine) {
 	var arr = []
 	var res = []
 	for(var i = 0;i<25;i++){
 		arr[i] = 0
 		res[i] = 0	
 	}
 	for (var i = 0; i < ransomNote.length; i++) {
 		arr[(ransomNote.charCodeAt(i))-97]++;
 	}
 	for (var i = 0; i < magazine.length; i++) {
 		res[(magazine.charCodeAt(i))-97]++;
 	}
 	console.log(arr);
 	console.log(res);

 	for(var i =0 ; i<25;i++){
 		if(arr[i]>res[i]){
 			return false
 		}
 	}
 	return true
 };

canConstruct('a','b')