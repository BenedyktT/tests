/* Given a string of characters as input, write a function that returns it with the characters reversed. */
const algorithms = {
	reverse: string =>
		string
			.split("")
			.reverse()
			.join(""),
	//  A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.
	palindrome: string => {
		return string
			.toLowerCase()
			.split("")
			.reduce((acc, c, i, a) => {
				if (c === a[a.length - i - 1] && acc !== false) {
					return true;
				} else return false;
			}, null);
	},
	//Given an integer, reverse the order of the digits.
	integerReverse: int => {
		return (
			parseInt(
				int
					.toString()
					.split("")
					.reverse()
					.join("")
			) * Math.sign(int)
		);
	},
	//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
	fizzBuzz: int => {
		const integers = [];
		for (let i = int; i >= 1; i--) {
			(!(i % 2) && !(i % 3) && integers.push("Fizz Buzz")) ||
				(!(i % 2) && integers.push("Fizz")) ||
				(!(i % 3) && integers.push("Buzz")) ||
				integers.push(i);
		}
		integers.forEach(e => console.log(e));
	},
	//Given a string of characters, return the character that appears the most often.
	maxCharacter: string => {
		const max = string.split("").reduce((acc, curr, i, arr) => {
			const x = arr.filter(e => e === curr);
			if (x.length > acc.length) return (acc = x);
			return acc;
		}, []);
		if (max.length === 1) {
			return "Each character have only 1 occurance";
		}
		return max[0];
	},
	//An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
	anagram: (word, toCheck) => {
		if (word.length !== toCheck.length) return false;
		let isAnagram = null;
		toCheck.split("").forEach((e, i, arr) => {
			const x = word.split("").some(x => x == e);
			if (!x) isAnagram = false;
			if (i === arr.length - 1 && x) {
				isAnagram = true;
				return;
			}
		});
		if (isAnagram) {
			return true;
		}
		if (isAnagram === false) {
			return false;
		}
	}
};

console.log(algorithms.anagram("rail safety", "fairy tale"));

module.exports = algorithms;
