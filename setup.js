const fs = require("fs");
const prompt = require("prompt-sync")();
let day = "dec" + prompt("What day do you want? ");

function solveBoilerPlate(part) {
    return `import { part${part} } from "./${day}/part${part}";
    
    const output = part${part}("input/${day}.txt");
    console.log('The answer to part ${part} is ' + output);
    `
}

function testBoilerPlate(part) {
    return `
    import { part${part} } from "./${day}/part${part}";
    
    const expected = 0;
    const output = part${part}("input/${day}-test${part}.txt");
    
    if (output === expected) {
        console.log("Test for part ${part} is a success!");
    } else {
        console.group();
        console.log("Test for part ${part} failed");
        console.log("Expected: " + expected + ", Output: " + output);
        console.groupEnd();
    }
    `
}



fs.writeFileSync(`./src/solve1.ts`, solveBoilerPlate(1));
fs.writeFileSync(`./src/solve2.ts`, solveBoilerPlate(2));
fs.writeFileSync(`./src/test1.ts`, testBoilerPlate(1));
fs.writeFileSync(`./src/test2.ts`, testBoilerPlate(2));
