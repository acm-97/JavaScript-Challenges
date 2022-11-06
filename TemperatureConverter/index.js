import readline from "readline";

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
  // red and capture an input from terminal
rl.question("Enter a scale to convert( Celsius (C), Fahrenheit (F) ): ", (type) => {
    rl.question("Enter a value?: ", (value) => {
        switch (true) {
            case type === 'Fahrenheit' || type === 'F':
                console.log((value * 9/5) + 32);
                break;
            default:
                console.log((value - 32) * 5/9)
                break;
        }
        rl.close();
    })
});