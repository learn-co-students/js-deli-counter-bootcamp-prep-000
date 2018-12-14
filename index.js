var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
	katzDeliLine[katzDeliLine.length] = name;

	return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine)
{
	if (katzDeliLine.length === 0)
	{
		return 'There is nobody waiting to be served!';
	}

	let serving = katzDeliLine[0];

	katzDeliLine.shift();

	return serving === null ? 'There is nobody waiting to be served!' : 'Currently serving ' + serving + '.';
}

function currentLine(katzDeliLine)
{
	if (katzDeliLine.length === 0)
	{
		return 'The line is currently empty.';
	}

	let line = 'The line is currently: ';
	let counter = 1;

	katzDeliLine.forEach(function(element) {
		if (counter === katzDeliLine.length)
		{
			line += counter + '. ' + element;
		}
		else {
			line += counter + '. ' + element + ', ';
		}


		counter++;
	});

	return line;
}
