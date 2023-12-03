import { part2 } from "./dec3/part2";

const expected = 467835;
const output = part2("input/dec3-test2.txt");

if (output === expected) {
    console.log("Test for part 2 is a success!");
} else {
    console.group();
    console.log("Test for part 2 failed");
    console.log("Expected: " + expected + ", Output: " + output);
    console.groupEnd();
}
