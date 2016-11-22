var katzDeliLine = [];

function takeANumber (arr, name) {
	arr.push(name);
	var lineNumber = arr.length;
	return "Welcome, " + name + ". You are number " + lineNumber + " in line.";
	// console.log(katzDeliLine);
	// console.log(lineNumber);
	// console.log("Welcome, " + name + ". You are number " + katzDeliLine + "in line.");
}

function nowServing(arr) {
	if (arr.length !== 0) {
		var customerName = arr.shift();
		return "Currently serving " + customerName + ".";
	}
	else {
		return "There is nobody waiting to be served!";
	}
}

function currentLine (arr) {

  if (arr.length === 0) {
   return "The line is currently empty.";
  }

  var intro = "The line is currently: ";

  for (let i = 0; i < arr.length; i++) {

    var position = [i + 1] + ". " + arr[i] + ", ";
    intro += position;
    }

  // return intro

  var newStr = intro.substring(0, intro.length-2);

	return newStr;

}
