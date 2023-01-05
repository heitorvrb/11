import { readFileSync } from "fs";

const input: string[] = readFileSync("inputs/test.txt", "utf8")
    .trim()
    .split(/\n/)

export default function main() {
    console.log('start');
    input.forEach(line => {
        console.log(line);
    });
    console.log('end');
}
