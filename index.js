var katzDeli = [];

var takeANumber =(katzDeli, name) => {
  katzDeli.push(name);
  var order = katzDeli.length;
  return `Welcome, ${name}. You are number ${order} in line.`;
};

var nowServing = katzDeli => {
  if (katzDeli.length>0){
    var firstPerson = katzDeli[0];
    var status = `Currently serving ${firstPerson}.`;
    katzDeli.shift();
    return status;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

var currentLine = deliLine => {
    var people = deliLine.length;
    var announcement = "The line is currently: ";
    var peopleInLine = [];

    if (people <= 0) {
        return `The line is currently empty.`;
    } else {
        for (var i = 0; i < people; i++) {
            peopleInLine.push(((i + 1) + ". " + deliLine[i]));
        }
        return `${announcement}${peopleInLine.join(", ")}`;
    }
}
