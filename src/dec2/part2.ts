import { readFileSync } from "fs";

export function getInput(file: string) {
    const fileContent = readFileSync(file, "utf-8");
    return fileContent.split("\n");
}

export function part2(file: string) {
    const input = getInput(file);
    let sum = 0;

    input.forEach((line, i) => {
        const counter: { [key: string]: number } = {
            red: 0,
            green: 0,
            blue: 0,
        };

        Object.keys(counter).forEach((key) => {
            const pulls = line.match(new RegExp(`\\d\+ ${key}`, "g"));
            pulls?.forEach((pull) => {
                const nr = parseInt(pull.split(" ")[0]);
                counter[key] = Math.max(nr, counter[key]);
            });
        });

        sum += counter.red * counter.green * counter.blue;
    });

    return sum;
}
