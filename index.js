var katzDeli = [];


function takeANumber(katzDeli, name) {
	katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
    if (katzDeli.length < 1) {
		return "There is nobody waiting to be served!"
  } else {
		return `Currently serving ${katzDeli.shift()}.`;
    }
}


var line = [];

function currentLine(katzDeli) {
	let i = 0;
	while (i < katzDeli.length) {
	line.push(` ${i+1}. ${katzDeli[i]}`)
	i++;
}	if (katzDeli < 1) {
	return 'The line is currently empty.';
} 	else {
	return 'The line is currently:' + line;
}
}
