// var katzDeliLine = [];


//1

function takeANumber(line, name) {

  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`;

}


//2

function nowServing(line) {

  if (line.length > 0) {

    return `Currently serving ${line.shift()}.`;

} else {

  return 'There is nobody waiting to be served!';

}

}

//3

function currentLine(line) {

  if (line.length === 0) {

    return 'The line is currently empty.'

  } else {

      function lineShifter(array) {

        var lineOut = [];

        var end = array.length;

        for ( var i = 0; i < end; i++) {

        lineOut.push(` ${i + 1}. ${array.shift()}`);

        }

        return lineOut;

      }

    return `The line is currently:${lineShifter(line)}`;

  }

}
