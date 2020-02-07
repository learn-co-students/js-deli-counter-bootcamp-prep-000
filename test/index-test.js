/*global describe, it */

describe('deli', () => {
  describe('takeANumber', () => {
    var katzDeli;
    var otherDeli;

    beforeEach(() => {
      katzDeli = [];
      otherDeli = ["Steven", "Blake", "Avi"];
    });

    it('adds a person to the line', () => {
      function takeANumber (katzDeliLine, name){
        katzDeli.push(`${name}`);
        return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
      }
      expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
      expect(katzDeli).toEqual(['Ada']);
    });

    it('appends the person the end of the line if there are already people on it', () => {
      function takeANumber(otherDeli,name) {
        var name = [ "Grace"];
        otherDeli.push (`${name}`);
          return (`Welcome, ${name}. You are number ${otherDeli.length} in line.`);

      }
      expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
      expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
    });

    it("properly handles multiple people being added", () => {
      function takeANumber(katzDeli, name ) {
        var katzDeli = [];
        var  name = ["Ada", "Grace", "Kent"];
        for ( let i =1; i<name.length; i++){
          katzDeli.push(`Welcome ${name[i]}, You are ${i} in line`);
        }
      }
      return katzDeli
      expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
    });
  });

  describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      function nowServing() {
        var empty = [];
        return "There is nobody waiting to be served!"

      }
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    ('returns an announcement about the person it is serving, and shifts the line', () => {
      function nowServing(deliLine) {
        var deliLine = [];
        var deliLine = ["Steven","Blake", "Avi"];
        var b = deliLine.shifts ();
        console.log(`Currently serving + ${b} ` );
      }

      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      function currentLine() {
        var line = [];

      }
      return "The line is currently empty."

      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      function currentLine( name ) {
        var  name = ["Ada", "Grace", "Kent"];
        for ( let i =1; i<name.length; i++){
          name.push(` ${name[i]},The line is currently: ${i} in line`);
        }
      }
      return name
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
