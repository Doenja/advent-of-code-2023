
    import { part1 } from "./dec2/part1";
    
    const expected = 8;
    const output = part1("input/dec2-test1.txt");
    
    if (output === expected) {
        console.log("Test for part 1 is a success!");
    } else {
        console.group();
        console.log("Test for part 1 failed");
        console.log("Expected: " + expected + ", Output: " + output);
        console.groupEnd();
    }
    