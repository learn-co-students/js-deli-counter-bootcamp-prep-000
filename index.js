var katzDeliLine = [];

var takeANumber = function(katzDeliLine, person){
    katzDeliLine.push(person);
    let position = katzDeliLine.length;
    return `Welcome, ${person}. You are number ${position} in line.`;
};

var nowServing = function(katzDeliLine){
    if (!katzDeliLine.length) {
        return 'There is nobody waiting to be served!';
    } else {
        let person = katzDeliLine.shift();
        return `Currently serving ${person}.`;
    }

};

var currentLine = function(katzDeliLine){
    if (!katzDeliLine.length) {
        return `The line is currently empty.`;
    } else {
        let line = [];
        for (let i=0; i < katzDeliLine.length; i++) {
            line.push(`${i+1}. ${katzDeliLine[i]}`);
        }
        return `The line is currently: ${line.join(', ')}`;
    }
};
