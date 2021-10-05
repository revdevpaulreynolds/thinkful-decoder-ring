// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("polybius", () => {
    it("should make 22 into G", () => {
        let expected = 'g';
        let actual = polybius('22', false);
        expect(actual).to.equal(expected);
    });
    it("should change coded messages back into decoded ones", () => {
        
    })
})