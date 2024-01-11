import * as fs from "fs";
import * as readline from "readline";

export function findCalibrationValue(search: string): number {
    const regex = /\d/g;
    const digits = search.match(regex);

    if (digits) {
        console.log('Digits: ' + JSON.stringify(digits))
        if (digits?.length == 1) {
            return +(digits[0] + digits[0]);
        } else
            return +(digits[0] + digits[digits.length - 1]);
    }
    return 0;
}

export function sumCalibrationValues(values: string[]): number {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum = sum + findCalibrationValue(values[i])
    }
    return sum;
}
export async function sumCalibrationValuesFromFile_1(filepath:string):Promise<number>{
    const fileStream = fs.createReadStream(filepath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    let sum = 0;
    for await (const line of rl) {
        const calibration = line;
        sum = sum + findCalibrationValue(calibration);
    }
    return sum;
}
