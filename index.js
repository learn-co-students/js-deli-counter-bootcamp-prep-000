let katzDeliLine = [];
function takeANumber(katzDeliLine, personName) {
    katzDeliLine.push(personName);
    let personIndex = katzDeliLine.length;
    return `Welcome, ${personName}. You are number ${personIndex} in line.`;
}
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

function nowServing(katzDeliLine) {
    let personServed = katzDeliLine.shift()
    while (personServed !== undefined) {
        return `Currently serving ${personServed}.`;
    }
    if (personServed === undefined) {
        return 'There is nobody waiting to be served!'
    }
}
nowServing(katzDeliLine);

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return `The line is currently empty.`
    } else {
        let persons = [];
        for (let i = 0; i < katzDeliLine.length; i++) {
            persons.push(`${i + 1}. ${katzDeliLine[i]}`);
        }
        return `The line is currently: ${persons.join(', ')}`
    }
}
