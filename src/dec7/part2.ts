import { readFileSync } from "fs";

    export function getInput(file: string) {
        const fileContent = readFileSync(file, "utf-8");
        return fileContent.split("\n");
    }
    
    export function part2(file: string) {
        const input = getInput(file);
        console.log(input);
        return 0;
    }