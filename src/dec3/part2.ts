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
        let starMatch: any;
        const nrRegex = /[0-9]+/g;
        let nrMatch;
        while ((starMatch = starRegex.exec(row)) !== null) {
            const numbersAroundGears: number[] = [];
            [rowIndex - 1, rowIndex, rowIndex + 1].forEach((starRow) => {
                while ((nrMatch = nrRegex.exec(input[starRow]))) {
                    if (
                        nrMatch.index > starMatch.index + 1 ||
                        nrMatch.index + nrMatch[0].length <= starMatch.index - 1
                    ) {
                        continue;
                    } else {
                        numbersAroundGears.push(parseInt(nrMatch[0]));
                    }
                }
            });
            if (numbersAroundGears.length > 1) {
                let total = 1;
                numbersAroundGears.forEach((nr) => (total = total * nr));
                sum += total;
            }
        }
    });

    return sum;
}
