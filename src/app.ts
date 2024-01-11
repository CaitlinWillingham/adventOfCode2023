import {sumCalibrationValuesFromFile_1} from "./day1/part1";
import {sumCalibrationValuesFromFile_2} from "./day1/part2";


const path = '/Users/cwillingham/Development/Personal/adventOfCode2023/src/day1/inputs/input.txt'

async function part1(): Promise<number> {
    try {
        return await sumCalibrationValuesFromFile_1(path);
    } catch (err) {
        console.error('An error happened! ', err);
        return 0;
    }
}async function part2(): Promise<number> {
    try {
        return await sumCalibrationValuesFromFile_2(path);
    } catch (err) {
        console.error('An error happened! ', err);
        return 0;
    }
}

part1().then(value => {
    console.log('Part 1: ' + value);
});
part2().then(value => {
    console.log('Part 2: ' + value);
});