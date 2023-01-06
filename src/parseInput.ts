export function parseInput(input: string[]): Monkey[] {
    const monkeys: Monkey[] = [];
    let currentMonkeyId: number;
    input.forEach(line => {
        // console.log(line);
        line = line.trim();
        if (line.startsWith('Monkey')) {
            currentMonkeyId = +line
                .split(' ')
                .pop()
                .slice(0, -1);
            monkeys.push({ id: currentMonkeyId });
        } else if (line.startsWith('Starting items')) {
            monkeys[currentMonkeyId].startingItems = line
                .split(':')
                .pop()
                .split(', ')
                .map(item => parseInt(item));
        } else if (line.startsWith('Operation')) {
            
        }
    });

    return monkeys;
}