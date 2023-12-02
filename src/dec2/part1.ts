import { readFileSync } from "fs";

export function getInput(file: string) {
    const fileContent = readFileSync(file, "utf-8");
    return fileContent.split("\n");
}

const set: { [key: string]: number } = {
    red: 12,
    green: 13,
    blue: 14,
};

export function part1(file: string) {
    const input = getInput(file);
    let sum = 0;

    input.forEach((line, i) => {
        const counter: { [key: string]: number } = {
            red: 0,
            green: 0,
            blue: 0,
        };
        let possible = true;

        Object.keys(counter).forEach((key) => {
            const pulls = line.match(new RegExp(`\\d\+ ${key}`, "g"));

            pulls?.forEach((pull) => {
                const nr = parseInt(pull.split(" ")[0]);
                counter[key] = Math.max(nr, counter[key]);
            });

            if (counter[key] > set[key]) {
                possible = false;
                return;
            }
        });

        if (possible) {
            sum += i + 1;
        }
    });

    return sum;
}
