const fs = require("fs");
const prompt = require("prompt-sync")();
let day = "dec" + prompt("Which day do you wish to generate? ");

function boilerPlate(part) {
    return `import { readFileSync } from "fs";

    export function getInput(file: string) {
        const fileContent = readFileSync(file, "utf-8");
        return fileContent.split("\\n");
    }
    
    export function part${part}(file: string) {
        const input = getInput(file);
        console.log(input);
        return 0;
    }`;
}

function solveBoilerPlate(part) {
    return `import { part${part} } from "./${day}/part${part}";
    
    const output = part${part}("input/${day}.txt");
    console.log('The answer to part ${part} is ' + output);
    `;
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
    `;
}

if (fs.existsSync("./src/" + day)) {
    console.log(day + " already exists!");
} else {
    fs.mkdirSync("./src/" + day);
    fs.writeFileSync(`./src/${day}/part1.ts`, boilerPlate(1));
    fs.writeFileSync(`./src/${day}/part2.ts`, boilerPlate(2));
    fs.writeFileSync(`./input/${day}-test1.txt`, "");
    fs.writeFileSync(`./input/${day}-test2.txt`, "");
    fs.writeFileSync(`./input/${day}.txt`, "");
    fs.writeFileSync(`./src/solve1.ts`, solveBoilerPlate(1));
    fs.writeFileSync(`./src/solve2.ts`, solveBoilerPlate(2));
    fs.writeFileSync(`./src/test1.ts`, testBoilerPlate(1));
    fs.writeFileSync(`./src/test2.ts`, testBoilerPlate(2));
}
