// Default Parameters and Template Literals
const favMovie = (movie = "Waterworld", name = "Tommy Wiseau") => console.log(`my name is ${name} and my favorite movie is ${movie}`);

favMovie("The Shawshank Redemption", "Morgan Freeman");
favMovie("Josh");




// ES6 Arrow Functions
const getFirstName = (name) => {
    const nameArr = name.split(" "); // ["Josh", "Hurn"]
    return nameArr[0];
};

// concise body is automatically returned!
const getFirstNameConcise = (name) => name.split(" ")[0];

// backticks in console.log respect any whitespace!
console.log(`
    ${getFirstName("Josh Hurn")},
    
    ${getFirstNameConcise("Josh Hurn")}
`);

// %c to style console.logs  *Note: this only works in Edge, Chrome, and Firefox! Also, this is not ES6 related.
console.log('%cHello there!', 'background:#0091ea; color:#fff; padding:5px; margin: 5px; border:2px solid black; border-radius: 5px;');

// Use parentheses to return multiple lines in an ES6 arrow function!
const doMath = (val1, val2) => ({
    exponent: Math.pow(val1, val2),
    product: val1 * val2
});

const doneMath = doMath(2, 3);

console.log(`the exponent result is ${doneMath.exponent} and the product is ${doneMath.product}`);




// Spread Syntax weeeeeee
const logsThreeThings = (name, location, favFood) => console.table([name, location, favFood]); 
const arr = ["Paul", "Birmingham", "Kimchi"];

// spread each index from the array into an argument for the logsThreeThings function!
logsThreeThings(...arr);

// a guy named Henry
const myName = "Henry";

// functions with one argument do not require parenthesis
const myFunc = string => {
    // spread each index of a string into an array literal.
    const arr = [...string]; // ["H", "e", "n", "r", "y"];

    // loop over said array and log each index (letter)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    };
};

myFunc(myName);