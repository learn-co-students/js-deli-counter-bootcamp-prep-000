/*global describe, it */

describe('deli', () => {
  describe('takeANumber', () => {
    var customerLine;
    var otherLine;

    beforeEach(() => {
      customerLine = [];
      otherLine = ["Steven", "Blake", "Avi"];
    });

    it('adds a person to the line', () => {
      expect(takeANumber(customerLine, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
      expect(customerLine).toEqual(['Ada']);
    });

    it('appends the person the end of the line if there are already people on it', () => {
      expect(takeANumber(otherLine, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
      expect(otherLine).toEqual(["Steven", "Blake", "Avi", "Grace"]);
    });

    it("properly handles multiple people being added", () => {
      takeANumber(customerLine, 'Ada');
      takeANumber(customerLine, 'Grace');
      takeANumber(customerLine, 'Kent');

      expect(customerLine).toEqual(["Ada", "Grace", "Kent"]);
    });
  });

  describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
