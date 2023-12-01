
    import { part1 } from "./dec1/part1";
    
    const expected = 0;
    const output = part1("input/dec1-test1.txt");
    
    if (output === expected) {
        console.log("Test for part 1 is a success!");
    } else {
        console.group();
        console.log("Test for part 1 failed");
        console.log("Expected: " + expected + ", Output: " + output);
        console.groupEnd();
    }
    