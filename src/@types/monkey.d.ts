type Monkey = {
    id: number
    startingItems?: number[];
    operation?: (old: number) => number
}