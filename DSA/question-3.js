function countPalindrome(str, left, right){

	let count = 0;
	while(left>=0 && right < str.length && str[left] === str[right]){
		count++;
		left--;
		right++;
	}
	return count;

}

function findPalindrome(sentence){
	let count = 0;
	for(let i=0;i<sentence.length; i++){
		count += countPalindrome(sentence, i, i);
		count +=countPalindrome(sentence, i, i+1);
	}
	return count;
}

let palindrome = "aabbba";
console.log('findPalindrome', findPalindrome(palindrome));