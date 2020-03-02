const algorithms = require("./index");

test("it should be defined", () => {
	expect(algorithms.reverse("chuj")).toBeDefined();
});
test("Should reverse input string", () => {
	expect(algorithms.reverse("chuj")).toEqual("juhc");
});

test("Should be palindrome", () => {
	expect(algorithms.palindrome("abba")).toBeTruthy();
});

test("Should not be palindrome", () => {
	expect(algorithms.palindrome("lolilopalola")).toBeFalsy();
});

test("Should  be palindrome with capitalization", () => {
	expect(algorithms.palindrome("Looool")).toBe(true);
});
