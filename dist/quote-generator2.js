function Quote(beg, mid, end) {
    this.beg = beg;
    this.mid = mid;
    this.end = end;
}


// create Objects - each object has 3 parts
let alan = new Quote(
    ['The only way to make sense out of change is to plunge into it',
     'I have realized that the past and future are real illusions,', 
     'No valid plans for the future', 
     'Never pretend to a love', 
     'You and I are all as much continuous'],

    ['move with it,', 
    'that they exist in the present,', 
    'can be made by those', 
    'which you do not actually feel,', 
    'with the physical universe'],

    ['and join the dance.', 
    'which is what there is and all there is.', 
    'who have no capacity for living now.', 
    'for love is not ours to command.', 
    'as a wave is continuous with the ocean.']
);

let yoda = new Quote(
    ['When nine hundred years old you reach,',
     'A Jedi uses the Force for', 
     'Once you start down the dark path,', 
     'Clear your mind must be,', 
     'To answer power with power,'],

    ['look as good,',
     'knowledge and defense,',
     'forever will it dominate your destiny,',
     'if you are to find',
     'the Jedi way'],

    ['you will not, hmmm?',
     'never for attack.',
     'consume you it will.',
     'the villains behind this plot.',
     'this is not.']
);


function generateQuote(q, num) {
    var num = (typeof num !== 'undefined') ? num : 1; // num cannot be undefined
    var q = (typeof q == 'object') ? q : eval(q); // q variable defined as an object
  
/*if (typeof num !== "undefined") { 
  num = num
} else {
  num = 1
}
*/

    let result = [];
        for (let i = 0; i < num; i++) {
             result[i] = '';
             // individual parts of this object with 'for in' loop
              for (let prop in q) {
                   result[i] += ' '+ q[prop][Math.floor(Math.random() * q[prop].length)]; // we use square brackets because this is a variable
                   
        }
        result[i] = result[i].trim(); // remove unnecessary spaces
    }
    // console.log(result) - in order to test the function;
    return result;
};



let button = document.querySelector('button'); // select button

// assign a function to a button
button.addEventListener('click', function() {
    let quoteType = document.getElementById('quote-type').value;
    let radioInput = document.querySelector('input[name=inlineRadioOptions]:checked').value;
    let quotes = generateQuote(quoteType, radioInput);
        
    // generate new 'li' for every new random quote
    document.getElementById('quote-random').innerHTML = '';
    for (let index = 0; index < quotes.length; index++) {
        const element = quotes[index];
        const node = document.createElement('li');
        const textNode = document.createTextNode(element);
        node.appendChild(textNode);
        document.getElementById('quote-random').appendChild(node);
    }
}); 

