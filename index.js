var katzDeliLine = []

      function takeANumber(katzDeliLine, newName ) {
        katzDeliLine.push(newName);

        return (`Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`)
      }

      function nowServing(katzDeliLine) {
        let i = 0;

        if (katzDeliLine.length === 0) {
          return "There is nobody waiting to be served!";
        }
          else return (`Currently serving ${katzDeliLine.shift()}.`);
      }

      function currentLine(katzDeliLine) {
        var remainingPeople = [];

        for (let i = 0; i < katzDeliLine.length; i++) {
          remainingPeople.push(" " + [i+1] +". " + katzDeliLine[i])
        }

        if (katzDeliLine.length === 0) {
          return "The line is currently empty.";
        }
          else return ("The line is currently:" + remainingPeople);
      }
