var katzDeliLine = []
/* function takeANumber(line, element) {
    for (var i=1; i<arguments.length; i++) {
      line.push(arguments[i]);
      var number = line.indexOf(element) + 1;
    }
      for (var i= 0; i<line.length; i++) {
        var name = `${line[i]}`;
      return `Welcome, ${name}. You are number ${number} in line.`;
    }
  };*/
  function takeANumber(line, name) {
      line.push(name);
      var number = line.length;
      return `Welcome, ${name}. You are number ${number} in line.`;
    };

    function nowServing(line) {
        if (line.length === 0) {
          return 'There is nobody waiting to be served!';
        } else {
          var serving = line[0];
          line.shift();
          return `Currently serving ${serving}.`;
        }
      };

    /*  function currentLine (line) {
    if (line.length === 0) {
      return "This line is empty.";
    } else {
      for (var i = 0; i < items.length; i++) {
        return `The line is currently: ${i + 1}. ${items[i]}`);
      }
    }*/

    function currentLine(line) {
    if (!line.length) {
      return "The line is currently empty."
    }

    const numbersAndNames = []

    for (let i = 0, l = line.length; i < l; i++) {
      numbersAndNames.push(`${i + 1}. ${line[i]}`)
    }

    return `The line is currently: ${numbersAndNames.join(', ')}`
  };
