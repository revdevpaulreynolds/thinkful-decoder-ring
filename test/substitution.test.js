const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("substitution written by Paul", () => {
    it("should correctly transpose letters", () => {
        let alphabet = 'plmoknijbuhvygctfxrdzeswaq';
        let expected = 'ppp';
        let actual = substitution('aaa', alphabet);
        expect(actual).to.equal(expected);
    });
    it("should return false if there are repeated characters", () => {
        let alphabet = 'aaa';
        let expected = false;
        let actual = substitution('aaa', alphabet);
        expect(actual).to.equal(expected);
    })
})