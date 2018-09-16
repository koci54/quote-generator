// create a multidimensional array

const quotes =
  
 [
  ["It is better to be hated for",
   "Who,", 
   "The goal isn’t to live forever,", 
   "When someone leaves,", "It is our choices", 
   "If we wait until we’re ready,", "When you are imagining,", 
   "It is sometimes"],

  ["hat you are than to be loved",
   "being loved,", "the goal is to create", 
   "it’s because someone else", 
   "that show what we truly are,", 
   "we’ll be waiting for", 
   "you might as well imagine", 
   "an appropriate response"],

  ["for what you are not.",
   "is poor?", 
   "something that will.", 
   "is about to arrive.", 
   "more than our abilities.", 
   "the rest of our lives.", 
   "something worth while.", 
   "to reality to go insane."]
 ];


/*  
    parameter q represents 'quotes' elements 
    parameter num represents number of quotes to be generated
*/
function generateQuote(q, num) {

const result = []; // create an empty array
    for (let i=0; i < num; i++) {
      result[i] = ""; // loop throgh the outer array
         for (let j=0; j < q.length; j++) {
             result[i] += " "+ q[j][Math.floor(Math.random() * q[j].length)]; // loop through the inner array
      }
       result[i] = result[i].trim(); // remove unnecessary spaces
    }
 return result;
};

function displayQuote() {
  console.log(generateQuote(quotes,1));
};

// call the function
displayQuote();