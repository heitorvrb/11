import { readFileSync } from "fs";
import { parseInput } from "./parseInput";

const input: string[] = readFileSync("inputs/test.txt", "utf8")
    .trim()
    .split(/\n/)

export default function main() {
    console.log('start');
    const monkeys: Monkey[] = parseInput(input);

    console.log('end');
}
