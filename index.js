//js-deli-counter-bootcamp-prep-000

var takeANumber = (katzDeli, name) => {
      var i = katzDeli.length;
      katzDeli.push(name);
      return `Welcome, ${name}. You are number ${i+1} in line.`;
    }

var nowServing = (katzDeli) => {
    if(katzDeli.length > 0) {
      var Serving = `Currently serving ${katzDeli[0]}.`;
      katzDeli.shift();
      return Serving;
    }
    else {
       return "There is nobody waiting to be served!";
    }
}


var currentLine = (katzDeli) => {
    if(katzDeli.length === 0)
    {
      return "The line is currently empty."
    }
    else {
      var string = "";
      for(let i=0 ; i < katzDeli.length - 1 ; i++){
          string += `${i+1}. ${katzDeli[i]}, `;
      }
    }
    return "The line is currently: " + string + `${katzDeli.length}. ${katzDeli[katzDeli.length - 1]}`;
}
