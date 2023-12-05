import { readFileSync } from "fs";

export function getInput(file: string) {
    const fileContent = readFileSync(file, "utf-8");
    return fileContent.split("\n");
}

let seeds: number[] = [];
let lowestLocationNumber = Infinity;
const maps: { [name: string]: Array<Array<number>> } = {};

export function part1(file: string) {
    const input = getInput(file);
    const seedStrings = input.shift()!.match(/\d+/g);
    if (!seedStrings) return 0;
    seeds = seedStrings.map((seed) => parseInt(seed));

    let mapName = "";
    input.forEach((line) => {
        if (!line[0]) {
            return;
        }
        const nrs = line.match(/\d+/g)?.map((match) => parseInt(match));
        if (nrs) {
            maps[mapName] = maps[mapName] ? [...maps[mapName], nrs] : [nrs];
            return;
        }
        const match = line.match(/[a-z-]+/);
        if (match) {
            mapName = match[0];
        }
    });

    seeds.forEach((seed) => {
        let nr = seed;
        Object.values(maps).forEach((map, i) => {
            let add = 0;
            map.forEach((entry) => {
                const lower = entry[1];
                const upper = entry[1] + entry[2] - 1;
                const diff = entry[0] - entry[1];
                if (lower <= nr && nr <= upper) {
                    add = diff;
                    return;
                } else {
                    return;
                }
            });
            nr += add;
        });
        lowestLocationNumber = Math.min(nr, lowestLocationNumber);
    });

    return lowestLocationNumber;
}
