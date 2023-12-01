import { getInput } from "./part1";

const numbers: {[key: string]: string} = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
}

export function part2(file: string) {
    const input = getInput(file);
    let sum = 0;

    input.forEach((item) => {
        if (!item) return;
        let left = 0;
        let right = item.length - 1;

        let leftResult = null;
        let rightResult = null;

        while (right !== left - 5) {
            if (leftResult && rightResult) {
                sum += parseInt(`${leftResult}${rightResult}`);
                return;
            }

            // left
            if (!leftResult) {
                if(parseInt(item[left])) {
                    leftResult = parseInt(item[left]).toString()
                } else {
                    leftResult =
                    numbers[item.substring(left, left + 3)] ||
                    numbers[item.substring(left, left + 4)] ||
                    numbers[item.substring(left, left + 5)] 
                }
                left++;
            }
            // right
            if (!rightResult) {
                if(parseInt(item[right])) {
                    rightResult = parseInt(item[right]).toString()
                } else {
                    rightResult =
                    numbers[item.substring(right, right - 3)] ||
                    numbers[item.substring(right, right - 4)] ||
                    numbers[item.substring(right, right - 5)] 
                }
                right--;
            }
        }
        if (leftResult && !rightResult) {
            sum += parseInt(`${leftResult}${leftResult}`);

        } else if (rightResult && !leftResult) {
            sum += parseInt(`${rightResult}${rightResult}`);
        }
    });

    return sum;
}
