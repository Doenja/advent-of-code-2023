import { readFileSync } from "fs";

export function getInput(file: string) {
    const fileContent = readFileSync(file, "utf-8");
    return fileContent.split("\n");
}

export function part1(file: string) {
    const input = getInput(file);
    let sum = 0;

    input.forEach((item) => {
        if (!item) return;
        let left = 0;
        let right = item.length - 1;
        let hasTwoDigits = true;

        while (!(parseInt(item[left]) && parseInt(item[right]))) {
            if (left === right) {
                hasTwoDigits = false;
                return;
            }
            if (!parseInt(item[left])) {
                left++;
            } else if (!parseInt(item[right])) {
                right--;
            }
        }
        if (hasTwoDigits) {
            sum += parseInt(item[left] + item[right]);
        }
    });
    return sum;
}
