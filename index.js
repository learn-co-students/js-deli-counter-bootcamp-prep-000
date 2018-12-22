
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing (katzDeliLine) {
   if (katzDeliLine.length >= 1) {
     var sentence = ("Currently serving " + katzDeliLine[0] + ".");
     katzDeliLine.splice(0,1);
     return sentence;
   } else {
     return ("There is nobody waiting to be served!");
   }
 }
 
function currentLine(katzDeliLine) {  
  var line = [];
if (katzDeliLine.length === 0)  {
    return "The line is currently empty.";
    }   
    else 
      {
        for(let i = 0; i<=katzDeliLine.length-1; i++) {
            line.push(" " + [i+1] + ". " + katzDeliLine[i]);
        }
        return "The line is currently:" + line;
    }
}

 /* function currentLine(katzDeliLine) {
   var line = [];
   let i = 0;
   while (i < katzDeliLine.length) {
     line.push(" " + [i+1] + ". " + katzDeliLine[i]);
     i++;
    }
   if (katzDeliLine.length === 0) {
     return "The line is currently empty.";
    } 
   else {
   return "The line is currently:" + line;
    }
  }
 */



/*describe('deli', () => {
  describe('takeANumber', () => {
    var katzDeli;
    var otherDeli;

    beforeEach(() => {
      katzDeli = [];
      otherDeli = ["Steven", "Blake", "Avi"];
    });

    it('adds a person to the line', () => {
      expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
      expect(katzDeli).toEqual(['Ada']);
    });

    it('appends the person the end of the line if there are already people on it', () => {
      expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
      expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
    });

    it("properly handles multiple people being added", () => {
      takeANumber(katzDeli, 'Ada');
      takeANumber(katzDeli, 'Grace');
      takeANumber(katzDeli, 'Kent');

      expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
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
})*/