// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
     const message = "%c" + txt;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
   const fontStyle = "color: tomato; font-size: 50px";

    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(`%cCelebrate!`, fontStyle);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
// WRITE YOUR CODE HERE
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Call the celebrateStyler function with an appropriate argument
// WRITE YOUR CODE HERE

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Call consoleStyler with the first four arguments
    // WRITE YOUR CODE HERE
     consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
    // Call celebrateStyler with the last argument
    // WRITE YOUR CODE HERE
}
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

// Call styleAndCelebrate with appropriate arguments
// WRITE YOUR CODE HERE