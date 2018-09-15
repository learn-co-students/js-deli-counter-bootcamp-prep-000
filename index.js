let deli = [];

function takeANumber(deli, newPerson){
  deli.push(newPerson);
  let position = deli.indexOf(newPerson) + 1;
  return `Welcome, ${newPerson}. You are number ${position} in line.`
}
function nowServing (katzDeliLine) {
  
		if (katzDeliLine.length > 0) {
		  
		let person = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${person}.`
		}
		else if (katzDeliLine.length === 0) {
		return "There is nobody waiting to be served!";
	}

}
function currentLine (deliLine) {
	let arr = [];
	if (deliLine.length=== 0) {
		return "The line is currently empty."
		
	} else {
		for (var i=0; i < deliLine.length; i ++) {
		const n = i+1;
		arr.push(n+". "+ deliLine[i]);		
		}
  return "The line is currently: " + arr.join(", ");
	}
	
}