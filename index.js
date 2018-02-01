function takeANumber(line, name){

  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`

}

function nowServing(line){

  if (line.length !== 0){

    let name = line[0];

    line.shift();

    return `Currently serving ${name}.`

  } else {

    return "There is nobody waiting to be served!"

  }
}


function currentLine(line) {

  if (line.length !== 0) {

    let lineList = "The line is currently: ";

    for (let i = 0; i < line.length; i++) {
      if (i === line.length - 1) {

        lineList += `${i + 1}. ${line[i]}`;

      } else {

        lineList += `${i + 1}. ${line[i]}, `;

      }
    }

    return lineList;

  } else {

    return "The line is currently empty.";

  }
}
