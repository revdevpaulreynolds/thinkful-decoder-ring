// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("caesar", () => {
    it("should return false if shift amount is 0", () => {
        const expected = false;
        let actual = caesar("blah", 0);
        expect(actual).to.equal(expected);
    })
    it("should transpose a letter around the upper edge of the alphabet", () => {
        const expected = 'b';
        let actual = caesar('y', 3);
        expect(actual).to.equal(expected);
    })
    it("should transpose a letter around the lower edge of the alphabet", () => {
        const expected = 'z';
        let actual = caesar('a', -1);
        expect(actual).to.equal(expected);
    })
})
