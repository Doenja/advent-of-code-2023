import { readFileSync } from "fs";

export function getInput(file: string) {
    const fileContent = readFileSync(file, "utf-8");
    return fileContent.split("\r\n");
}

export function cardsToNumbers(cards: string) {
    const numberArray = cards.split("").map((char) => {
        switch (char) {
            case "T":
                return 10;
            case "J":
                return 11;
            case "Q":
                return 12;
            case "K":
                return 13;
            case "A":
                return 14;
            default:
                return parseInt(char) as number;
        }
    });
    return numberArray;
}

const types: { [key: string]: { numbers: number[]; bid: string }[] } = {
    "1/1/1/1/1": [],
    "2/1/1/1": [],
    "2/2/1": [],
    "3/1/1": [],
    "3/2": [],
    "4/1": [],
    "5": [],
};

export function part1(file: string) {
    const input = getInput(file);
    let sum = 0;

    for (const hand of input) {
        const [cards, bid] = hand.split(" ");
        const numbers = cardsToNumbers(cards);

        const counter: any = {};
        numbers.forEach((nr) => {
            const str = nr.toString();
            counter[str] ? counter[str]++ : (counter[str] = 1);
        });

        const values = Object.values(counter);
        if (values.length === 1) {
            types["5"] = [...types["5"], { numbers, bid }];
        } else if (values.length === 2 && values.includes(4)) {
            types["4/1"] = [...types["4/1"], { numbers, bid }];
        } else if (values.length === 2) {
            types["3/2"] = [...types["3/2"], { numbers, bid }];
        } else if (values.length === 3 && values.includes(3)) {
            types["3/1/1"] = [...types["3/1/1"], { numbers, bid }];
        } else if (values.length === 3) {
            types["2/2/1"] = [...types["2/2/1"], { numbers, bid }];
        } else if (values.length === 4) {
            types["2/1/1/1"] = [...types["2/1/1/1"], { numbers, bid }];
        } else {
            types["1/1/1/1/1"] = [...types["1/1/1/1/1"], { numbers, bid }];
        }

        Object.values(types).forEach((item, i) => {});
    }
    return 0;
}
