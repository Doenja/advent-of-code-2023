import { readFileSync } from "fs";

export function getInput(file: string) {
    const fileContent = readFileSync(file, "utf-8");
    return fileContent.split("\n");
}

export function part1(file: string) {
    const input = getInput(file);
    let sum = 0;

    const symbols: { [x: string]: { [y: string]: string } } = {};

    input.forEach((row, rowIndex) => {
        const symRegex = /[+$*\/=#\-%&@]+/g;
        let symMatch;
        while ((symMatch = symRegex.exec(row)) !== null) {
            const sym = symMatch[0];
            const x = symMatch.index.toString();
            const y = rowIndex.toString();
            if (symbols[x]) {
                symbols[x] = { ...symbols[x], [y]: sym };
            } else {
                symbols[x] = { [y]: sym };
            }
        }
    });

    input.forEach((row, rowIndex) => {
        const nrsRegex = /[\d]+/g;
        let nrsMatch;
        while ((nrsMatch = nrsRegex.exec(row)) !== null) {
            for (let i = nrsMatch.index - 1; i <= nrsMatch.index + nrsMatch[0].length; i++) {
                if (
                    symbols[i.toString()] &&
                    (symbols[i.toString()][rowIndex - 1] ||
                        symbols[i.toString()][rowIndex] ||
                        symbols[i.toString()][rowIndex + 1])
                ) {
                    sum += parseInt(nrsMatch[0]);
                }
            }
        }
    });

    return sum;
}
