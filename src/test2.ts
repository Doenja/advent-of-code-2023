
    import { part2 } from "./dec7/part2";
    
    const expected = 0;
    const output = part2("input/dec7-test2.txt");
    
    if (output === expected) {
        console.log("Test for part 2 is a success!");
    } else {
        console.group();
        console.log("Test for part 2 failed");
        console.log("Expected: " + expected + ", Output: " + output);
        console.groupEnd();
    }
    