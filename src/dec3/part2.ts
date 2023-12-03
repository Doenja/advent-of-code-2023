import { readFileSync } from "fs";

export function getInput(file: string) {
    const fileContent = readFileSync(file, "utf-8");
    return fileContent.split("\n");
}

export function part2(file: string) {
    const input = getInput(file);
    let sum = 0;

    input.forEach((row, rowIndex) => {
        const starRegex = /[*]+/g;
        let starMatch;
        while ((starMatch = starRegex.exec(row)) !== null) {
            console.log(row, rowIndex, starMatch);
        }
    });

    return sum;
}
