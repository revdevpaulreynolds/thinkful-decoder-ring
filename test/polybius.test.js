// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("polybius written by Paul", () => {
    it("should make 22 into G", () => {
        let expected = 'g';
        let actual = polybius('22', false);
        expect(actual).to.equal(expected);
    });
    it("should change coded messages back into decoded ones", () => {
        let expected = "yay";
        let actual = polybius('451145', false);
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces", () => {
        let expected = "22 22";
        let actual = polybius('g g', true);
        expect(actual).to.equal(expected);
    })
})